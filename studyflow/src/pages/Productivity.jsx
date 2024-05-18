import Navbar from "../components/Navbar";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {

  DarkMode, LightMode, GlobalStyle
  } from '@chakra-ui/react'


export default function Productivity() {
    
    const location=useLocation()
    
    return (
        <>

<DarkMode>
      <GlobalStyle />
              <div className="homeContainer">
        <Navbar 
        />
        {/* <h2>Hello {location.state.id}, welcome to the home page.</h2> */}
        
 
        </div>
        
    </DarkMode>






        </>
    )
}