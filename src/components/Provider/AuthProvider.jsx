import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react'
import auth from './firebase.init.config';
   export const AuthContex = createContext(null)
 const AuthProvider = ({children}) => {
    const [user,setUser] = useState('hii');
    const [loading, setLoading] = useState(true);


    function handleUserPass(email , pass){
           setLoading(true);
           return createUserWithEmailAndPassword(auth,email,pass)
    }

    function userLogin(email,pass){
      setLoading(true);
      return signInWithEmailAndPassword(auth,email,pass)
    }

    const userObj = {
        user,
        setUser,
        loading,
        setLoading,
        handleUserPass,
        userLogin
    }
  return (
    <AuthContex.Provider value={userObj}>
          {children}
    </AuthContex.Provider>
  )
}

export default AuthProvider