import { useState, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Select from 'react-select';
import axios from 'axios';
import * as Yup from 'yup';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import ThemeContext from '../../Hooks/ThemeContext';
import toast from 'react-hot-toast';

const categories = [
    { value: 'cat', label: 'Cat' },
    { value: 'dog', label: 'Dog' },
    { value: 'rabbit', label: 'Rabbit' },
    { value: 'bird', label: 'Bird' },
    { value: 'other', label: 'Other' }
];

const AddPets = () => {
    const { theme } = useContext(ThemeContext);
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const initialValues = {
        pet_image: '',
        pet_name: '',
        pet_age: '',
        pet_color: '',
        pet_gender: '',
        category: '',
        pet_location: '',
        vaccinated: '',
        neutered_spayed: '',
        shortDescription: '',
        longDescription: ''
    };

    const validationSchema = Yup.object({
        pet_name: Yup.string().required('Required'),
        pet_age: Yup.string().required('Required'),
        pet_color: Yup.string().required('Required'),
        pet_gender: Yup.string().required('Required'),
        category: Yup.string().required('Required'),
        pet_location: Yup.string().required('Required'),
        vaccinated: Yup.string().required('Required'),
        neutered_spayed: Yup.string().required('Required'),
        shortDescription: Yup.string().required('Required'),
        longDescription: Yup.string().required('Required')
    });

    const handleImageUpload = async (event, setFieldValue) => {
        setLoading(true);
        const file = event.currentTarget.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'your_upload_preset'); 

        try {
            const response = await axios.post('https://api.cloudinary.com/v1_1/your_cloud_name/image/upload', formData);
            setImageUrl(response.data.secure_url);
            setFieldValue('pet_image', response.data.secure_url);
        } catch (error) {
            console.error('Error uploading image:', error);
        } finally {
            setLoading(false);
        }
    };

    const onSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            await axios.post('https://pet-haven-bd-server-one.vercel.app/pets', values);
            resetForm();
            setImageUrl('');
            toast.success('The pet has been added successfully!');
        } catch (error) {
            console.error('Error adding pet:', error);
            toast.error('Failed to add the pet.');
        }
        setSubmitting(false);
    };

    return (
        <div className={`container mx-auto p-4 ${theme === 'Dark' ? 'bg-gray-800 text-gray-200' : 'bg-gray-200 text-gray-800'}`}>
            <h2 className="text-2xl font-semibold mb-4">Add a Pet</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ setFieldValue, isSubmitting, values }) => (
                    <Form>
                        <div className="mb-4">
                            <label htmlFor="pet_image" className="block text-gray-700 dark:text-gray-300">Pet Image</label>
                            <input
                                type="file"
                                name="pet_image"
                                onChange={(event) => handleImageUpload(event, setFieldValue)}
                                className="mt-1 block w-full"
                            />
                            {loading ? (
                                <Skeleton height={128} width={128} className="mt-2" />
                            ) : (
                                imageUrl && <img src={imageUrl} alt="Pet" className="mt-2 h-32 w-32 object-cover" />
                            )}
                            <ErrorMessage name="pet_image" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="pet_name" className="block text-gray-700 dark:text-gray-300">Pet Name</label>
                            <Field name="pet_name" type="text" className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200" />
                            <ErrorMessage name="pet_name" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="pet_age" className="block text-gray-700 dark:text-gray-300">Pet Age</label>
                            <Field name="pet_age" type="text" className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200" />
                            <ErrorMessage name="pet_age" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="pet_color" className="block text-gray-700 dark:text-gray-300">Pet Color</label>
                            <Field name="pet_color" type="text" className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200" />
                            <ErrorMessage name="pet_color" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="pet_gender" className="block text-gray-700 dark:text-gray-300">Pet Gender</label>
                            <Field name="pet_gender" type="text" className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200" />
                            <ErrorMessage name="pet_gender" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="category" className="block text-gray-700 dark:text-gray-300">Pet Category</label>
                            <Field name="category">
                                {({ field, form }) => (
                                    <Select
                                        options={categories}
                                        name="category"
                                        onChange={option => form.setFieldValue('category', option.value)}
                                        onBlur={field.onBlur}
                                        className="mt-1 block w-full dark:bg-gray-800 dark:text-gray-200"
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="pet_location" className="block text-gray-700 dark:text-gray-300">Pet Location</label>
                            <Field name="pet_location" type="text" className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200" />
                            <ErrorMessage name="pet_location" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="vaccinated" className="block text-gray-700 dark:text-gray-300">Vaccinated</label>
                            <Field name="vaccinated" type="text" className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200" />
                            <ErrorMessage name="vaccinated" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="neutered_spayed" className="block text-gray-700 dark:text-gray-300">Neutered/Spayed</label>
                            <Field name="neutered_spayed" type="text" className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200" />
                            <ErrorMessage name="neutered_spayed" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="shortDescription" className="block text-gray-700 dark:text-gray-300">Short Description</label>
                            <Field name="shortDescription" type="text" className="mt-1 block w-full dark:bg-gray-700 dark:text-gray-200" />
                            <ErrorMessage name="shortDescription" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="longDescription" className="block text-gray-700 dark:text-gray-300">Long Description</label>
                            <Field name="longDescription">
                                {({ field }) => (
                                    <ReactQuill
                                        value={values.longDescription}
                                        onChange={value => field.onChange({ target: { name: field.name, value } })}
                                        className="dark:bg-gray-700 dark:text-gray-200"
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="longDescription" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-sky-500 text-white px-4 py-2 rounded dark:bg-sky-700"
                            >
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default AddPets;
