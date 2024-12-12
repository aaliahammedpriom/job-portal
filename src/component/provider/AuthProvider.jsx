import { useEffect, useState } from 'react';
import AuthContext from './Provider';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import auth from '../../firebase/firebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser]= useState(null)
    const [loading, setLoading] = useState(true)
    const handleCreateUser =(email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword (auth, email,password);
    }
    const handleSignINUser =(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const handleSignOutUser =()=>{
        setLoading(true)
        return signOut(auth);
    }

    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        })
        return ()=> unSubscribe();
    },[])

    const authInfo ={
        user,
        loading,
        handleCreateUser,
        handleSignINUser,
        handleSignOutUser

    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;