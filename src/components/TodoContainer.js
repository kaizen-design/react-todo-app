import React from "react";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./TodoList";
import Header from "./Header";
import TodoInput from "./TodoInput";

class TodoContainer extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    const todos = localStorage.getItem("todos");
    console.log(todos);
    if(todos) {
      this.setState({
        todos: JSON.parse(todos)
      })
    }    
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos))
    }
  }

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

  handleItemUpdate = (title, id) => {
    this.setState(prevState => {
      return {
        todos: [
          ...prevState.todos.map(todo => {
            if (todo.id === id) {
              todo.title = title;
            }
            return todo;
          })
        ]
      }
    });    
  }

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <TodoInput  
            handleAddTodoItemProps={this.handleAddTodoItem} />
          <TodoList 
            todos={this.state.todos} 
            handleChangeProps={this.handleChange} 
            handleDeleteTodoProps={this.handleDeleteTodo} 
            handleItemUpdate={this.handleItemUpdate} />
        </div>    
      </div>      
    );
  }
}
export default TodoContainer;
