import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: `${import.meta.env.VITE_API_URL}`,
});

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { signOutUser } = useAuth();

    axiosSecure.interceptors.request.use(config => {
        const token = localStorage.getItem('access-token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    }, error => Promise.reject(error));

    axiosSecure.interceptors.response.use(response => response, async error => {
        if (error.response.status === 401 || error.response.status === 403) {
            await signOutUser();
            navigate('/login');
        }
        return Promise.reject(error);
    });

    return axiosSecure;
};

export default useAxiosSecure;
