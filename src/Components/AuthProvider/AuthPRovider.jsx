import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase";

export const AuthContext = createContext(null)
const AuthPRovider = ({children}) => {

    const [user, setUser] = useState(null)
    const [load, setLoad] = useState(true)

     const signUp = (email, password)=>{
        setLoad(true)
        return createUserWithEmailAndPassword(auth, email, password)
     }
     const update = (name,image) =>{
     return updateProfile(auth.currentUser, {
        displayName:name,
        photoURL:image
     })
     }

     const login = (email, password) =>{
        setLoad(true)
        return signInWithEmailAndPassword(auth,email, password)
     }

     useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('current user', currentUser  );
            setLoad(false)
        })
        return () =>{
            return unSubscribe();
        }
     },[])

     const logOut = () =>{
        return signOut(auth)
     }
    const information = {
        user,
        load,
        signUp,
        update,
        login,
        logOut
    }
    return (
        <AuthContext.Provider value={information}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthPRovider;