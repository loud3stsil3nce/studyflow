import Navbar from "../components/Navbar";

import {

  DarkMode, LightMode, GlobalStyle
  } from '@chakra-ui/react'


export default function Productivity() {
    return (
        <>

<DarkMode>
      <GlobalStyle />
              <div className="homeContainer">
        <Navbar 
        />
        <h2>Home Page</h2>
        
 
        </div>
        
    </DarkMode>






        </>
    )
}