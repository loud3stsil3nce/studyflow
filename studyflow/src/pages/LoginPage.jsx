import { useEffect, useState } from "react"
import Navbar from "../components/Navbar";
import LoginBox from "../components/LoginBox";

export default function LoginPage() {
    return (
        <>
        <Navbar />
        <div className="loginheader">Login!</div>
        <LoginBox />
        </>
    )
}