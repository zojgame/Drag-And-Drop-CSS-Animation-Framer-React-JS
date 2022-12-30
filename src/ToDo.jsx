import { useState } from "react";
import { Reorder } from "framer-motion";
import {nanoid} from 'nanoid';
import { useContext } from "react";
import React from "react";
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';


const columnStyle = {
}

const listStyle = {
    width:'20%', 
    listStyleType: 'none',
    
}

const itemStyle = {
    background: 'linear-gradient(90deg, rgba(255,0,26,1) 35%, rgba(245,255,0,1) 90%)',
    border: '1px solid white',
    color: 'white',
    borderRadius: '5px',
    margin: '10px 0',
    padding: '5% 0',
    cursor: 'pointer'
}

const defaultItem = [
    { id: nanoid(), textValue: 'Сделать уборку' },
    { id: nanoid(), textValue: 'Помыть попу'  },
    { id: nanoid(), textValue: 'Сходить за мандаринами' },
    { id: nanoid(), textValue: 'Нарядить ёлку'},
]

const ItemContext = React.createContext([], null)

function ToDoDragAndDropComponent(){
    const [items, setItems] = useState(defaultItem);
    const deleteTask = (taskId) => {
        setItems(items.filter((item) => item.id !== taskId));
    }

    return (
        <ItemContext.Provider value={{items, setItems}}>
            <CreateItem/>
            <Reorder.Group axis="y" 
            values={items} 
            onReorder={setItems} 
            style={listStyle}
            
            >
                
                <div style={columnStyle}>
                {items.map((item) => (
                        <Reorder.Item 
                        value={item} 
                        key={item.id} 
                        style={itemStyle}
                        className="task-item"
                        >
                                {item.textValue}
                            <DeleteIcon 
                            className="delete-btn" 
                            fontSize="medium" 
                            onClick={() => deleteTask(item.id)}/>   
                        </Reorder.Item>
                )) }
                </div>
            </Reorder.Group> 

        </ItemContext.Provider>
        
    )
}

const createItemStyle = {
    textField: {
        color: 'white',
        gridColumn: '1 / 2'
    },
    createItemField: {
        display: 'inline-grid',
        gridTemplateColumns: '4fr 1fr',
        width: '15%',
        gap: '10%'
        
    },
    plusBtn: {
        width: '3vw',
        height: '3vw',
        border: '2px solid white'
    },
}



function CreateItem(){
    const {items, setItems} = useContext(ItemContext);
    const[isBtnPlusClicked, setBtnClicked] = useState(false);
    const [task, setTask] = useState('');
    
    const handleTextChange = (e) => {
        console.log(e.target.value);
        setTask(e.target.value);
    }

    const handleAddTask = () => {
        setBtnClicked(!isBtnPlusClicked);
        if(task.length !== 0){
            setItems([...items,  { id: nanoid(), textValue: task }]);
            setTask('');
        }

    }

    return (
        <>
            
            <span style={createItemStyle.createItemField}>
                <TextField
                    style={createItemStyle.textField}
                    label="Put Text"
                    color={'warning'}
                    onChange={handleTextChange}
                    value={task}
                    sx={{ 
                    "& .MuiFormLabel-root": {
                        color: 'white',
                    }}} 
                />            

                <div style={createItemStyle.plusBtn}>
                    <div className={`add-task-btn-container ${!isBtnPlusClicked ? 'plus-flip-anim' : ''}`} onClick={handleAddTask}>
                        <div className={`add-task-plus-btn1 ${isBtnPlusClicked ? "stick-flip1" : ''}`}></div>    
                        <div className={`add-task-plus-btn2 ${isBtnPlusClicked ? "stick-flip2" : ''}`}></div>    
                    </div>
                    
                </div>
            </span>
        </>
        
    )
    
}

export default ToDoDragAndDropComponent;