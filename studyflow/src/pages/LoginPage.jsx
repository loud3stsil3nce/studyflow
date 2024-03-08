import { useEffect, useState } from "react"
import Navbar from "../components/Navbar";
import LoginBox from "../components/LoginBox";
import RegisterBox from "../components/RegisterBox";

export default function LoginPage() {
    return (
        <>
        <Navbar />
        <div className="logincontainer"> 
        <LoginBox />


        </div>
    

        </>
    )
}