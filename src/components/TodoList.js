import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
  return (
    <ul>
      {props.todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          handleChangeProps={props.handleChangeProps} 
          handleDeleteTodoProps={props.handleDeleteTodoProps} 
          handleItemUpdate={props.handleItemUpdate} />
      ))}
    </ul>
  );
}

export default TodoList;
