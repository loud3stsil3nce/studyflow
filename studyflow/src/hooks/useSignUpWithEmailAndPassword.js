import React from "react";
import { auth, firestore } from "../firebase/firebase";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

import { setDoc } from "firebase/firestore";



const useSignUpWithEmailAndPassword = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const signup = async (inputs) => {
     if(!inputs.email || !inputs.password || !inputs.confirmPassword){
    console.log("Please fill all fields")
    return
    }   
    try {
        const newUser = await createUserWithEmailAndPassword(inputs.email,inputs.password)
        if(!newUser && error){
            console.log(error)
            return
        } if(newUser){
            const userDoc = {
                uid:newUser.user.id,
                email:inputs.email,
                createdAt:Date.now(),
                
            }
            await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
            localStorage.setItem("user-info", JSON.stringify(userDoc))
        }

        } catch (error) {
          console.log(error)  
        }
    }
    return {loading,error,signup}

    }


export default useSignUpWithEmailAndPassword