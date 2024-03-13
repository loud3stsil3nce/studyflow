import Navbar from "../components/Navbar";
import List from "../components/List";



import { Box, Flex } from "@chakra-ui/react";

import {

  DarkMode, LightMode, GlobalStyle
  } from '@chakra-ui/react'



export default function Todo() {
    return (
        <>
              <div className="homeContainer">
        <Navbar 
        />

       <div className="listContainer">
          <Flex flexDirection={"row"}>
        <Box>
            <div>
                <h1 className="listTitle">To-Do</h1>
                <List/>
            </div>
            
        </Box>
        <Box>
            <div>
            <h1 className="listTitle">In Progress</h1>
                <List/>
            </div>
            
        </Box>
        <Box>
            <div>
            <h1 className="listTitle">Completed</h1>
                <List/>
            </div>
            
        </Box>
          </Flex>
       </div>
  
        </div>
  
        </>
    )
}