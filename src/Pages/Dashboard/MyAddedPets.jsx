// import React, { useEffect, useState, useContext } from 'react';
// import {
//   useTable,
//   useSortBy,
//   usePagination,
// } from '@tanstack/react-table';
// import Swal from 'sweetalert2';
// import { useNavigate } from 'react-router-dom';
// import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';
// import PropTypes from 'prop-types';
// import ThemeContext from '../../Hooks/ThemeContext';
// import toast from 'react-hot-toast';
// import useAuth from './../../Hooks/useAuth';
// import useAxiosSecure from './../../Hooks/useAxiosSecure';

// const MyAddedPets = ({ pageSize }) => {
//   const { theme } = useContext(ThemeContext);
//   const [pets, setPets] = useState([]);
//   const [pageCount, setPageCount] = useState(0);
//   const axiosSecure = useAxiosSecure();
//   const navigate = useNavigate();
//   const { user } = useAuth(); 

//   useEffect(() => {
//     const fetchPets = async (pageIndex) => {
//       try {
//         const response = await axiosSecure.get('/my-pets', {
//           params: { userId: user.id, page: pageIndex + 1, limit: pageSize }
//         });
//         setPets(response.data.pets);
//         setPageCount(response.data.totalPages);
//       } catch (error) {
//         console.error('Error fetching pets:', error);
//       }
//     };

//     if (user) {
//       fetchPets(0);
//     }
//   }, [axiosSecure, user, pageSize]);

//   const data = React.useMemo(() => pets, [pets]);

//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'Serial Number',
//         accessor: (row, i) => i + 1,
//       },
//       {
//         Header: 'Pet Name',
//         accessor: 'pet_name',
//       },
//       {
//         Header: 'Category',
//         accessor: 'category',
//       },
//       {
//         Header: 'Image',
//         accessor: 'pet_image',
//         Cell: ({ value }) => <img src={value} alt="Pet" className="h-16 w-16 object-cover" />,
//       },
//       {
//         Header: 'Adoption Status',
//         accessor: 'adopted',
//         Cell: ({ value }) => (value ? 'Adopted' : 'Not Adopted'),
//       },
//       {
//         Header: 'Actions',
//         Cell: ({ row }) => (
//           <div className="flex space-x-2">
//             <button
//               className="text-red-500"
//               onClick={() => handleUpdate(row.original._id)}
//             >
//               <FaEdit />
//             </button>
//             <button
//               className="text-red-500"
//               onClick={() => handleDelete(row.original._id)}
//             >
//               <FaTrash />
//             </button>
//             <button
//               className="text-green-500"
//               onClick={() => handleAdopted(row.original._id)}
//             >
//               <FaCheck />
//             </button>
//           </div>
//         ),
//       },
//     ],
//     []
//   );

//   const handleUpdate = (id) => {
//     navigate(`/update-pet/${id}`);
//   };

//   const handleDelete = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonText: 'Yes, delete it!',
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           await axiosSecure.delete(`/pets/${id}`);
//           setPets(pets.filter(pet => pet._id !== id));
//           toast.success('The pet has been deleted.');
//         } catch (error) {
//           console.error('Error deleting pet:', error);
//           toast.error('Failed to delete the pet.');
//         }
//       }
//     });
//   };

//   const handleAdopted = async (id) => {
//     try {
//       await axiosSecure.put(`/pets/${id}`, { adopted: true });
//       setPets(pets.map(pet => (pet._id === id ? { ...pet, adopted: true } : pet)));
//       toast.success('The pet has been marked as adopted.');
//     } catch (error) {
//       console.error('Error updating pet status:', error);
//       toast.error('Failed to mark the pet as adopted.');
//     }
//   };

//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page,
//     canPreviousPage,
//     canNextPage,
//     nextPage,
//     previousPage,
//     state: { pageIndex },
//   } = useTable(
//     {
//       columns,
//       data,
//       manualPagination: true,
//       pageCount,
//       initialState: { pageIndex: 0, pageSize },
//     },
//     useSortBy,
//     usePagination
//   );

//   useEffect(() => {
//     const fetchPets = async () => {
//       try {
//         const response = await axiosSecure.get('/my-pets', {
//           params: { userId: user.id, page: pageIndex + 1, limit: pageSize }
//         });
//         setPets(response.data.pets);
//         setPageCount(response.data.totalPages);
//       } catch (error) {
//         console.error('Error fetching pets:', error);
//       }
//     };

//     if (user) {
//       fetchPets();
//     }
//   }, [pageIndex, axiosSecure, user, pageSize]);

//   return (
//     <div className={`min-h-screen ${theme === 'Dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
//       <div className="container mx-auto p-4">
//         <h2 className="text-2xl font-semibold mb-4">My Added Pets</h2>
//         <table {...getTableProps()} className="min-w-full bg-white dark:bg-gray-700">
//           <thead>
//             {headerGroups.map((headerGroup) => (
//               <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map((column) => (
//                   <th key={column.id} {...column.getHeaderProps(column.getSortByToggleProps())} className="px-4 py-2 border-b">
//                     {column.render('Header')}
//                     <span>
//                       {column.isSorted
//                         ? column.isSortedDesc
//                           ? ' 🔽'
//                           : ' 🔼'
//                         : ''}
//                     </span>
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>
//           <tbody {...getTableBodyProps()}>
//             {page.map((row) => {
//               prepareRow(row);
//               return (
//                 <tr key={row.id} {...row.getRowProps()}>
//                   {row.cells.map((cell) => (
//                     <td key={cell.id} {...cell.getCellProps()} className="px-4 py-2 border-b">
//                       {cell.render('Cell')}
//                     </td>
//                   ))}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//         <div className="flex justify-between mt-4">
//           <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//             Previous
//           </button>
//           <span>
//             Page{' '}
//             <strong>
//               {pageIndex + 1} of {pageCount}
//             </strong>{' '}
//           </span>
//           <button onClick={() => nextPage()} disabled={!canNextPage}>
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// MyAddedPets.propTypes = {
//   pageSize: PropTypes.number,
// };

// MyAddedPets.defaultProps = {
//   pageSize: 10,
// };

// export default MyAddedPets;


const MyAddedPets = () => {
  return (
    <div>
      <h1>My Added Pets</h1>
    </div>
  );
};

export default MyAddedPets;