import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const usePet = (page, limit) => {
    const axiosPublic = useAxiosPublic();
    const { data = { pets: [], totalPages: 0 }, isLoading: loading, refetch } = useQuery({
        queryKey: ['pets', page, limit], 
        queryFn: async () => {
            const res = await axiosPublic.get(`/pets?page=${page}&limit=${limit}`);
            return res.data;
        }
    });
    return [data.pets, data.totalPages, loading, refetch];
};

export default usePet;