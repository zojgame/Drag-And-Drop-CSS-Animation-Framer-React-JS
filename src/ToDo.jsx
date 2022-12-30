import { useState } from "react";
import { Reorder } from "framer-motion";
import {nanoid} from 'nanoid';
import { useContext } from "react";
import React from "react";
import TextField from '@mui/material/TextField';
import './App.css';


const columnStyle = {
    // border: '2px solid black's
}

const listStyle = {
    width:'20%', 
    listStyleType: 'none',
    
}

const itemStyle = {
    background: 'linear-gradient(90deg, rgba(255,0,26,1) 35%, rgba(245,255,0,1) 90%)',
    border: '1px solid black',
    color: 'white',
    borderRadius: '10px',
    margin: '10px 0'
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

    return (
        <ItemContext.Provider value={{items, setItems}}>
            <CreateItem/>
            <Reorder.Group axis="y" values={items} onReorder={setItems} style={listStyle}>
                
                <div style={columnStyle}>
                {items.map((item) => (
                        <Reorder.Item value={item} key={item.id} style={itemStyle}>
                                {item.textValue}
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

    return (
        <>
            
            <span style={createItemStyle.createItemField}>
                <TextField
                    style={createItemStyle.textField}
                    label="Put Text"
                    color={'warning'}
                    sx={{ 
                    "& .MuiFormLabel-root": {
                        color: 'white',
                    }}} 
                />            
                <div style={createItemStyle.plusBtn}></div>
            </span>
        </>
        
    )
    
}

export default ToDoDragAndDropComponent;