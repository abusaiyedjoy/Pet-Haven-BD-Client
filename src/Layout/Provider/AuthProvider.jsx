import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { app } from './../../Components/Shared/Fairbase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from './../../Hooks/useAxiosPublic';

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const axiosPublic = useAxiosPublic()
    const googleProvider = new GoogleAuthProvider()


    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = async () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const updateUserProfile = async(name, photo) => {
        return await updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            setLoading(true)
            if (currentUser) {
                try {
                    const userInfo = { email: currentUser.email };
                    const res = await axiosPublic.post('/jwt', userInfo);
                    if (res.data?.token) {
                        localStorage.setItem('access-token', res.data?.token);
                    } else {
                        console.warn("No token received from server");
                    }
                } catch (error) {
                    console.error("Error fetching token:", error);
                } finally {
                    setLoading(false); 
                }
            } else {
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        });

        return () => {
            unSubscribe();
        };
    }, []);



    const useInfo = {
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        googleSignIn,
        updateUserProfile,
    }
    return (
        <AuthContext.Provider value={useInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthProvider;