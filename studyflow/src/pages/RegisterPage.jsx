import { useEffect, useState } from "react"
import Navbar from "../components/Navbar";
import LoginBox from "../components/LoginBox";
import RegisterBox from "../components/RegisterBox";





export default function RegisterPage() {
    return (
        <>
        <Navbar />
        <div className="registercontainer"> 
        <RegisterBox />
        </div>
        </>
    )
}