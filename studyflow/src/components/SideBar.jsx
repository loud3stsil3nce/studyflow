import { Box, Flex, background } from "@chakra-ui/react"
import { Grid, GridItem, Button, Link} from '@chakra-ui/react'
import { px } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
     return <div className="Sidebar">
        
        <Grid className="sidebar-container" gap={2}>
            <GridItem className="sidebar-row logo-row"  >
                <div className="logo">
                    <img src=""></img>
                </div>
            </GridItem> 
            
            <Box>
              Navigation
            </Box>


            <GridItem className="sidebar-row" rowSpan={1} h='100%' >
                <li className="sideBtn" ><a href="/todo">Todo</a></li>
            </GridItem> 
            <GridItem className="sidebar-row" rowSpan={1} h='100%' >
            <li className="sideBtn" ><a href="/todo">Calendar</a></li>
            </GridItem> 
            <GridItem className="sidebar-row" rowSpan={1} h='100%' >
            <li className="sideBtn" ><a href="/todo">Writing</a></li>
            </GridItem> 
            <GridItem className="sidebar-row" rowSpan={1} h='100%' >
            <li className="sideBtn" ><a href="/sketch">Sketch</a></li>
            </GridItem> 
            <GridItem className="sidebar-row" rowSpan={1} h='100%' >
            <li className="sideBtn" ><a href="/auth">Log Out</a></li>
            </GridItem> 

        </Grid>
        
        
        </div>
}
   


export default Sidebar
