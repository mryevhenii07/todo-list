
import React from 'react'

import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';

import Stack from '@mui/material/Stack';


import s from './TodoItem.module.css';
import {ITodo} from '../types/data'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

interface ITodoItem extends ITodo {
    toggleTodo:(id:number)=>void;
    removeTodo:(id:number)=>void
}

const TodoItem: React.FC<ITodoItem> = (props) => {
    const {id,title,complete,removeTodo,toggleTodo} = props
 return <div className={s.wrap}>
   
      <Checkbox {...label} checked={complete} onChange={()=>toggleTodo(id)}/>
    
    {/* <input type="checkbox" checked={complete} onChange={()=>toggleTodo(id)}/> */}
    <div className={s.text}
    >   {title}</div>
 
    <Stack direction="row" spacing={2}>
      <Button onClick={()=>removeTodo(id)} variant="outlined" >
        Delete
      </Button>
    
    </Stack>
    {/* <button onClick={()=>removeTodo(id)}>X</button> */}
 </div>
}

export default TodoItem