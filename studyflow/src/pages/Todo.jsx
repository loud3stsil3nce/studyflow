import Navbar from "../components/Navbar";
import List from "../components/List";
import { Box, Flex } from "@chakra-ui/react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { useState } from "react";
import { Column } from "../components/Column";
import { arrayMove } from "@dnd-kit/sortable";
import { Input } from "../components/Input";


export default function Todo() {
const [tasks, setTasks] = useState([

]);

const addTask = title => {
    setTasks (tasks => [...tasks, {id: tasks.length + 1, title}])
}


const getTaskPos = id => tasks.findIndex(task => 
    task.id === id)


const handleDragEnd = event => {
    const {active, over} = event

    if(active.id === over.id) return;
    setTasks(tasks => {
        const originalPos = getTaskPos(active.id)
        const newPos = getTaskPos(over.id)

        return arrayMove(tasks, originalPos, newPos)
    })
}

    return (
        <>
              <div className="homeContainer">
        <Navbar 
        />
<div className="page">
<h1>My Tasks</h1>
<DndContext onDragEnd={handleDragEnd} 
collisionDetection={closestCorners}>

    <Input onSubmit={addTask}/>
    <Column tasks={tasks}></Column>

</DndContext>

</div>

        

       {/* <div className="listContainer">
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
       </div> */}
  
        </div>
  
        </>
    )
}