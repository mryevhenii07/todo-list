import React,{useEffect,useState,useRef} from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import {ITodo} from '../types/data'
import TodoList from '../TodoList/TodoList'

import s from './App.module.css'


const  App: React.FC = ()=> {
  const [value,setValue] =useState("")
  const [todos,setTodos] =useState<ITodo[]>([])

  const inputRef = useRef<HTMLInputElement>(null)

  const addTodos =()=>{
    if(value){  
       setTodos([...todos,{
      id:Date.now(),
      title:value,
      complete:false,
    }])
    setValue("")
  }
}
  

  const handelChange:React.ChangeEventHandler<HTMLInputElement> =(e)=>{
    setValue(e.target.value)
  }

  const handelKeyDown:React.KeyboardEventHandler<HTMLInputElement> =(e)=>{
  if(e.key === "Enter"){
   addTodos() 
  }
}

  const removeTodo = (id:number):void =>{
    setTodos(todos.filter((todo)=> todo.id !== id)  )

   }

   const toggleTodo = (id:number):void =>{
    setTodos(todos.map(todo => {
      if(todo.id !== id) return todo;
      return {...todo,
        complete:!todo.complete}
    }))
   }
  

useEffect(()=>{
  if(inputRef.current)
  {
    inputRef.current.focus()
  }
  
},[])
  return (
    <div className={s.app}>
    <div className={s.wrap}>
    <div className={s.wrapBtnInput}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Text" placeholder='Enter text' variant="outlined" ref={inputRef} onKeyDown={handelKeyDown} type="text" value={value} onChange={handelChange}/>
    </Box>
      <Stack spacing={2} direction="row">
      <Button className={s.btn} variant="contained" onClick={addTodos}>Add contact</Button>
    </Stack>

    </div>
 <TodoList items= {todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
    </div></div>
  );
}

export {App};
