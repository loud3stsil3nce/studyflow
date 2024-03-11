import Navbar from "../components/Navbar";
import List from "../components/List";
import Card from "../components/Card";


import {

  DarkMode, LightMode, GlobalStyle
  } from '@chakra-ui/react'


export default function Todo() {
    return (
        <>

<DarkMode>
      <GlobalStyle />
              <div className="homeContainer">
        <Navbar 
        />
        <h2>TODO Page</h2>
        <List/>
        
 
        </div>
        
    </DarkMode>






        </>
    )
}