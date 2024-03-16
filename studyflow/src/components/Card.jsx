import { useState, useRef } from "react";
import Draggable from "react-draggable";


const Card = (props) => {
    const [text, setText] = useState('Write something here.');
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState('Edit Title');


const nodeRef = useRef(null);

    return (
        <Draggable nodeRef={nodeRef} handle=".header">
            <div ref={nodeRef} className="card">
                <div className="header">{props.title}{isEditing ? <div><textarea className="title-input" value={title} onChange={(e) => 
                setTitle(e.target.value)} onDoubleClick={() => setTitle('')} /><button onClick={() => 
                setIsEditing(false)}>Save</button></div> : <p onClick={() => setIsEditing(true)}>{title}</p>}</div>
                
                <div className="content">{isEditing ? <div><textarea className="text-input" value={text} onChange={(e) => 
                setText(e.target.value)} onDoubleClick={() => setText('')} /><button onClick={() => 
                setIsEditing(false)}>Save</button></div> : <p onClick={() => setIsEditing(true)}>{text}</p>}</div>
            </div>
        </Draggable>
    )
}



export default Card;