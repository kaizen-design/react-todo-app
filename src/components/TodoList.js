import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { Context } from "../context";

const TodoList = () => {  
  const context = useContext(Context);
  const { todos } = context;
  return (    
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>        
  );
}

export default TodoList;
