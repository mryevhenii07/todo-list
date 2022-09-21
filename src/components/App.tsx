import {useEffect,useState,useRef} from 'react';
import {ITodo} from './types/data'
import TodoList from './TodoList'


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
    <div >
    <div>
      <input ref={inputRef} onKeyDown={handelKeyDown} type="text" value={value} onChange={handelChange}/>
      <button onClick={addTodos}>btn</button>
    </div>
 <TodoList items= {todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
    </div>
  );
}

export {App};
