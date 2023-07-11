import {createUserWithEmailAndPassword,signInWithPopup,signOut,FacebookAuthProvider  } from "firebase/auth";
import { auth,googleProvider,FbProvider } from "../config/firebase"; 
import { useState } from "react";


export const Auth = ()=>{
    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");

    console.log(auth?.currentUser?.photoURL)

    const signIn =async ()=>{
try{
        await createUserWithEmailAndPassword(auth,email,password)
}catch(err){
    console.error(err)
}

    };
    const signInWithGoogle = async () =>{
        try{
            await signInWithPopup(auth,googleProvider);

        }catch(err){
            console.error(err);
        }
    };
    const Logout = async () =>{
        try{
            await signOut(auth);
            delete{email,password};

        }catch(err){
            console.error(err);
        }
    };

    const FacebookAuthProvider = async () =>{
        try{
            await signInWithPopup(auth,FbProvider);

        }catch(err){
            console.error(err);
        }
    };

    return(
        <div>
            <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            <input  placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit" onClick={signIn}>Login</button>
            
            <button onClick={signInWithGoogle}>Sign In with Google</button>

            <button onClick={Logout}>Logout</button>

            <button onClick={FacebookAuthProvider}>Sign In With Facebook</button>
        </div>
    )
}