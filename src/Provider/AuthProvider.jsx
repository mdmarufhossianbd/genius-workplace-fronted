import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);

    // user Registation
    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo, email) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            email: email,
            photoURL: photo
        })
            .then(() => {
                toast.success('Your account create successfully')                    
                console.log('account create successfully');
            })
            .catch((error) => {
                console.log(error.message);
            })
    }
    // user login
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Logout
    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }

    // user state checking
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            setLoading(false)
        })
        return () => {
            unSubscribe();
        }
    }, [reload])

    const authInfo = {
        registerUser,
        updateUserProfile,
        setReload,
        logout,
        loginUser,
        user,
        loading,
        auth
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}            
            < Toaster
                position = "top-center"
                reverseOrder = { false}
            />
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;