import React from "react";
import "./Column.css"
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { Tab } from "@chakra-ui/react";
import { Task } from "./Task";
export const Column = ({tasks}) => {
    return <div className="columnn">
        <SortableContext items={tasks} strategy=
        {verticalListSortingStrategy}>
            {tasks.map((task) => (
            <Task id={task.id} title={task.title} key={task.id}></Task>))}
        </SortableContext>
    </div>
}