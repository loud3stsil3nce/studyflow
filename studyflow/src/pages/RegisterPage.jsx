import { useEffect, useState } from "react"
import Navbar from "../components/Navbar";

import RegisterBox from "../components/RegisterBox";
import Signup from "../components/Signup";





export default function RegisterPage() {
    return (
        <>
        <Navbar />
        <h1 className="bigtitle">Get Started Today.
        <h2 className="scrolltext">scroll</h2>

        <h2 className="scrolltext">d</h2>
        <h2 className="scrolltext">o</h2>
        <h2 className="scrolltext">w</h2>
        <h2 className="scrolltext">n</h2></h1>

        
        <div className="registercontainer"> 
        <Signup />
        </div>
        </>
    )
}