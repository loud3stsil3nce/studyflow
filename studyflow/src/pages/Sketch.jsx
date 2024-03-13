import Navbar from "../components/Navbar";
import List from "../components/List";
import { Box, Flex } from "@chakra-ui/react";
import Canvas from "../components/Sketch/Sketchpad";


export default function Sketchpad() {
    return (
<>
<div className="homeContainer">
    <Navbar/>
    <h1>Sketch!</h1>
    <p className="welcome">Welcome to Etch-a-Sketch, the game where you can etch the sketch your heart truly desires. 
        Please click on the Set Grid button, then pick how many squares you want on each side of the 
        grid. To clear your grid and restart your drawing, please click the Clear button. 
        </p>
        <div id="gameContainer">
            <button className="start">Set Grid</button>
            <div id="divContainer">
            </div>
            <button className="clear">Clear</button>
        </div>
        <Canvas/>

</div>
</>
    )
}