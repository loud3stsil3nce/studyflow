import { useEffect, useState } from "react"
import Navbar from "../components/Navbar";


import Auth from "../components/Auth";
import Login from "../components/Login";

export default function AuthPage() {
    return (
        <>
        <Navbar />
        <h1 className="bigtitle">Welcome Back.
        <h2 className="scrolltext">scroll</h2>

        <h2 className="scrolltext">d</h2>
        <h2 className="scrolltext">o</h2>
        <h2 className="scrolltext">w</h2>
        <h2 className="scrolltext">n</h2></h1>
        <div className="logincontainer"> 
          <Login />



        </div>
  

        </>
    )
}





{/*         <Auth />
 */}