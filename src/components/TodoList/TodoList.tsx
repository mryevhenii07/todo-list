import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import {ITodo} from '../types/data'

import s from './TodoList.module.css'

interface ITodoListProps {
    items:ITodo[];
    toggleTodo:(id:number)=> void;
    removeTodo:(id:number)=> void; 
}

const TodoList:React.FC<ITodoListProps> = (props) => {
  const {items,removeTodo,toggleTodo} = props
  return (
    <div className={s.wrapList}>
        {
      items.map((todo) => <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} removeTodo={removeTodo}/>)
        }
        </div>
  )
}

export default TodoList