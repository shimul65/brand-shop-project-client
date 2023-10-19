import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {

    // Sign up
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }



    const authInfo = {
        createUser,
        signIn,
        // googleLogin,
        // githubLogin,
        // handleUpdateProfile,
        // user,
        // loading,
        // logOut,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
};