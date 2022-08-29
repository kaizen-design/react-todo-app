import React from "react";
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {  

  state = {
    editMode: false
  };

  handleEditing = () => {
    this.setState({
      editMode: true
    })
  };

  handleUpdateDone = (e) => {
    if (e.key === "Enter") {
      this.setState({
        editMode: false
      })
    }
  }

  render() {    
    const { id, title, completed } = this.props.todo;
    
    let editMode = {};
    let viewMode = {};

    if (this.state.editMode) {
      viewMode.display = "none"
    } else {
      editMode.display = "none";
    }
    return (
      <li className={styles.item}>   
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <label htmlFor={id}>
            <input 
              type="checkbox" 
              id={id}
              className={styles.checkbox}
              checked={completed} 
              onChange={() => this.props.handleChangeProps(id)} /> 
            <span className={completed ? styles.completed : null}>
              {title}
            </span>
          </label>
          <button 
            onClick={() => this.props.handleDeleteTodoProps(id)}>
            Delete
          </button>
        </div>  
        <input 
          type="text" 
          className={styles.textInput} 
          style={editMode} 
          value={title} 
          onChange={e => {
            this.props.handleItemUpdate(e.target.value, id)
          }} 
          onKeyDown={this.handleUpdateDone} />                                
      </li>
    );
  }  
}
export default TodoItem;
