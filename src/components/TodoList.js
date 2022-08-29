import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {   
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            handleChangeProps={this.props.handleChangeProps} 
            handleDeleteTodoProps={this.props.handleDeleteTodoProps} 
            handleItemUpdate={this.props.handleItemUpdate} />
        ))}
      </ul>
    );
  }
}
export default TodoList;
