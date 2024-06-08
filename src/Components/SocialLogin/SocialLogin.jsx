import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";


const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result.user);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosPublic.post('/pets', userInfo)
            .then(res =>{
                toast.success('Successfully Sign Up!')
                console.log(res.data);
                navigate('/');
            })
        })
    }

    return (
        <div className="w-full">
            <div className="divider"></div>
            <div className="flex justify-center space-x-4 w-full">
                <button  onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex justify-center cursor-pointer items-center rounded-full w-full text-center px-9 py-3 text-lg gap-3 font-mono font-semibold text-sky-600 hover:text-white border-2 border-sky-600
                         transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-sky-600 duration-300  focus:bg-transparent">
                    <FcGoogle size={25} />
                    <p>Login with Google</p>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;