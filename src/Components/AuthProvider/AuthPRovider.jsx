import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase";
import { GoogleAuthProvider } from "firebase/auth";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";

export const AuthContext = createContext(null)
const AuthPRovider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [load, setLoad] = useState(true)
    const axiosPublic = UseAxiosPublic();
    const provider = new GoogleAuthProvider();

    const signUp = (email, password) => {
        setLoad(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, provider)
    }

    const update = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    const login = (email, password) => {
        setLoad(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser);

            if (currentUser) {
                // get token and store client
                const userInfo = { email: currentUser.email }
                axiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {
                            localStorage.setItem('access-token', res.data.token)
                            setUser(currentUser)
                            setLoad(false)
                        }
                    })
            }
            else {
                // set token in local storage and set the user after user get token
                localStorage.removeItem('access-token')
                setUser(null)
                setLoad(false)
            }
        })
        return () => {
            return unSubscribe();
        }
    }, [axiosPublic])

    const logOut = () => {
        return signOut(auth)
    }
    const information = {
        user,
        load,
        signUp,
        update,
        login,
        googleLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={information}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPRovider;