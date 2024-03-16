import { Box, Flex } from '@chakra-ui/react'
import Sidebar from "../components/SideBar"
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'


const PageLayout = ({ children }) => {
    const { pathname } = useLocation()
    return (
        <Flex>
            {/*sidebar on left */}
            {pathname !== "/auth" && pathname!== "/about" && pathname!== "/home" && pathname!== "/"?   (
                <Box w={{base:"70px", md:"240px"}}>
                  <Sidebar/>  
                </Box>              
            ) : null}         



            {/*page content on the right */}
            <Box flex={1} w={{base: "calc(100% - 70px)", md: "calc(100% - 240px)"}}>
                {children}
            </Box>
        </Flex>
    )
}


export default PageLayout