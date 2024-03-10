import { Flex, background } from "@chakra-ui/react"
import { Grid, GridItem, Button, Link} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
     return <div className="Sidebar">
        
        <Grid className="sidebar-container" templateRows='repeat(2, 1fr)' gap={4}>
            <GridItem className="sidebar-row" rowSpan={10} h='100%'>
                <div className="logo">
                    <img src=""></img>
                </div>
            </GridItem> 
            
            
            <GridItem className="sidebar-row" rowSpan={10} h='100%' >
                <li className="sideBtn" ><a href="/todo">Todo</a></li>
            </GridItem> 
            <GridItem className="sidebar-row" rowSpan={10} h='100%' >
            <li className="sideBtn" ><a href="/todo">Calendar</a></li>
            </GridItem> 
            <GridItem className="sidebar-row" rowSpan={10} h='100%' >
            <li className="sideBtn" ><a href="/todo">Writing</a></li>
            </GridItem> 
            <GridItem className="sidebar-row" rowSpan={10} h='100%' >
            <li className="sideBtn" ><a href="/todo">Sketch</a></li>
            </GridItem> 
            <GridItem className="sidebar-row" rowSpan={5} h='100%' >
            <li className="sideBtn" ><a href="/todo">Log Out</a></li>
            </GridItem> 

        </Grid>
        
        
        </div>
}
   


export default Sidebar
