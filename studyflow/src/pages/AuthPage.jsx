import { useEffect, useState } from "react"
import Navbar from "../components/Navbar";


import Auth from "../components/Auth";

export default function AuthPage() {
    return (
        <>
        <Navbar />
        <div className="logincontainer"> 
        <Auth />


        </div>
    

        </>
    )
}