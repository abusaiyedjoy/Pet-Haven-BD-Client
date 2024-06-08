/* eslint-disable react/prop-types */
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from './../../Hooks/useAuth';
import toast from "react-hot-toast";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";


//1. TODO: Update Profile by image input fields 
//2. TODO: Two aditional input fields
//3. After successfully registering, save the information of the user such as name and
// email in the database and store additional property named role. Default role will be
// user
// 4. Admin can make any other user admin from admin dashboard
// 5. There should be 2 roles for the users. admin and user


const SignUp = ({ switchToSignIn }) => {
    const { createUser, updateUserProfile } = useAuth()
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);

        const { name, photo, email, password } = data;
        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photo)
                    .then(() => {
                        reset()
                        toast.success('Successfully Sign Up!')
                        navigate('/');
                    })
            })
            .catch(error => {
                console.error("Caught Error", error)
            })
    };
    return (
        <>
            <Helmet>
                <title>Undefined | Sign Up</title>
            </Helmet>
            <section className="text-gray-900 dark:bg-gray-800 lg:w-2/3 xl:w-full mt-12 container p-4 mx-auto">
                <div className="container flex flex-col items-center justify-center px-6 mx-auto">
                    <h1 className="text-3xl mb-6 font-bold text-center text-sky-500">❣ Please Sign Up ❣</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full ">

                        <div className="">
                            <label htmlFor="Your Name" className="block text-lg dark:text-gray-200">Your Name:</label>
                            <div className="relative flex items-center text-gray-900 mt-1">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </span>

                                <input type="text" {...register("name", { required: true })} className="block w-full py-3 text-gray-900 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-sky-600 border-sky-600  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your Name" />
                            </div>
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>

                        <div className="">
                            <label htmlFor="Your Photo" className="block text-lg mt-3 dark:text-gray-200">Your Photo:</label>
                            <label className="flex items-center mx-auto mt-1 text-center">


                                <input type="file" {...register("photo", { required: true })} className="file-input file-input-bordered file-input-info w-full bg-white rounded-lg cursor-pointer text-black dark:text-gray-300 dark:bg-gray-900" />

                            </label>
                            {errors.photo && <span className="text-red-600">Photo is required</span>}
                        </div>
                        <div className="">
                            <label htmlFor="Your Email" className="block text-lg mt-3 dark:text-gray-200">Your Email:</label>
                            <div className="relative flex items-center mt-1">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </span>

                                <input type="email" name="email" {...register("email", { required: true })} className="block w-full py-3 text-gray-900 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-sky-600 border-sky-600  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                            </div>
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="">
                            <label htmlFor="Your Password" className="block text-lg mt-3 dark:text-gray-200">Your Password:</label>
                            <div className="relative flex items-center mt-1">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>

                                <input type="password" name="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} className="block w-full px-10 py-3 text-gray-900 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-sky-600 border-sky-600  focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                            </div>
                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        </div>
                        <div className="">
                            <label htmlFor="confirmPassword" className="block text-lg mt-3 dark:text-gray-200">Confirm Password:</label>
                            <div className="relative flex items-center mt-1">
                                <span className="absolute">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </span>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    {...register("confirmPassword", {
                                        required: true,
                                        validate: value => value === watch('password')
                                    })}
                                    className="block w-full px-10 py-3 text-gray-900 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-sky-600 border-sky-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            {errors.confirmPassword?.type === 'required' && <p className="text-red-600">Confirm Password is required</p>}
                            {errors.confirmPassword?.type === 'validate' && <p className="text-red-600">Passwords do not match</p>}
                        </div>

                        <div className="mt-6">
                            <button className="flex justify-center cursor-pointer items-center rounded-full w-full text-center px-9 py-3 text-xl font-mono font-semibold text-sky-600 hover:text-white border-2 border-sky-600 
                         transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-sky-600 duration-300  focus:bg-transparent">
                                Sign Up
                            </button>


                        </div>
                    </form>

                    <div className="flex items-center pt-4 w-full">
                        <div className="flex-1 h-px sm:w-16 bg-gray-700 dark:bg-gray-300"></div>
                        <p className="px-3 text-md dark:text-gray-200">Login with social accounts</p>
                        <div className="flex-1 h-px sm:w-16 bg-gray-700 dark:bg-gray-300"></div>
                    </div>


                    {/* Google Authentication */}

                    <div className="flex justify-center w-full">
                        <SocialLogin></SocialLogin>
                    </div>
                    <div className="mt-6 text-center ">
                        <a href="#" className="text-sm text-sky-500 dark:text-sky-400">
                            Already have an account? <Link onClick={switchToSignIn} className="hover:underline text-sm"> Sign In Now</Link>
                        </a>
                    </div>
                </div>
            </section>
        </>

    );
};

export default SignUp;