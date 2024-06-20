import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://pet-haven-bd-server-one.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;