import React from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./TodoList";
import Header from "./Header";
import TodoInput from "./TodoInput";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true,
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    this.setState(prevState => {
      return {
        todos: prevState.todos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              completed: !todo.completed
            }  
          }
          return todo;
        })
      }  
    })
  };

  handleDeleteTodo = (id) => {
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos.filter(todo => todo.id !== id)
        ]
      }
    })
  }

  handleAddTodoItem = (title) => {
    this.setState(prevState => {
      const newTodo = {
        id: uuidv4(),
        title: title,
        completed: false
      }
      return {
        todos: [
          ...prevState.todos,
          newTodo
        ]
      }
    })
  }

  render() {
    return (
      <>
        <Header />
        <TodoInput  
          handleAddTodoItemProps={this.handleAddTodoItem} />
        <TodoList 
          todos={this.state.todos} 
          handleChangeProps={this.handleChange} 
          handleDeleteTodoProps={this.handleDeleteTodo} />
      </>      
    );
  }
}
export default TodoContainer;
