import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useEffect } from "react";


const SocialLogin = () => {
    const { googleSignIn, user } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [navigate, user])
    const form = location.state || "/"
    const handleGoogleSignIn = async () => {
        try {
            const result = await googleSignIn();
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName,
            };

            const { data } = await axiosPublic.post(
                '/jwt',
                userInfo,
                { withCredentials: true } 
            );

            const token = data?.token;
            console.log("TOKEN", token);

            localStorage.setItem('accessToken', token);
            toast.success('Signin Successful');

            navigate(form, { replace: true });
        } catch (err) {
            console.error(err);
            toast.error(err?.message || 'Error during Google Sign-In');
        }
    };



    return (
        <div className="w-full">
            <div className="divider"></div>
            <div className="flex justify-center space-x-4 w-full">
                <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex justify-center cursor-pointer items-center rounded-full w-full text-center px-9 py-3 text-lg gap-3 font-mono font-semibold text-white border-2 border-primary
                         transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 bg-primary duration-300  focus:bg-transparent">
                    <FcGoogle size={25} />
                    <p>Login with Google</p>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;