import React from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodosContext from "../context";

const TodoContainer = () => {
  return (    
    <TodosContext>
      <Header />
      <TodoInput />
      <TodoList />
    </TodosContext>         
  );
}

export default TodoContainer;
