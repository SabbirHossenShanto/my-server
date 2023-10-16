import { createContext, useState } from "react";
import app from "../firebase/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";


const auth=getAuth(app)

 export const AuthContext=createContext(null)
const AuthProvide = ({children}) => {
const [user,setUser]=useState(null)
//const [loading,setLoading]=useState(null)


const createUser=(email,password)=>{

   // setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    
}





const authInfo={
user,
//loading,
createUser
}





    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvide;