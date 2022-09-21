import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const Context = React.createContext();

const TodosContext = (props) => {

  function getTodos() {
    const data = localStorage.getItem("todos");
    if (data) {
      return JSON.parse(data)
    }  
    return []
  }

  const [todos, setTodos] = useState(getTodos());

  useEffect(() => {    
    const data = localStorage.getItem("todos");
    if (data) {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }    
  }, []);

  useEffect(() => {    
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]); 

  const handleChange = (id) => {
    setTodos(todos => {
      return [
        ...todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }  
        }
        return todo;
      })
      ]  
    });    
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos => {
      return [
        ...todos.filter(todo => todo.id !== id)
      ]
    });    
  }

  const handleAddTodoItem = (title) => {
    setTodos(todos => {
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false
      }
      return [
        ...todos,
        newTodo
      ]
    })    
  }

  const handleItemUpdate = (title, id) => {
    setTodos(todos => {
      return [
        ...todos.map(todo => {
          if (todo.id === id) {
            todo.title = title;
          }
          return todo;
        })
      ]
    });      
  }

  return (
    <Context.Provider 
      value={{
        todos: todos,
        handleChangeProps: handleChange, 
        handleDeleteTodoProps: handleDeleteTodo,
        handleItemUpdate: handleItemUpdate,
        handleAddTodoItemProps: handleAddTodoItem
      }}       
    >
      {props.children}
    </Context.Provider>
  )
}

export default TodosContext;