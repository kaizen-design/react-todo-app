import React, { useState, useContext } from "react";
import { Context } from "../context";
import { FaTrash } from "react-icons/fa";
import styles from "./TodoItem.module.css"

const TodoItem = (props) => {
  const { id, title, completed } = props.todo;

  const [editMode, setEditMode] = useState(false);

  let editModeStyles = {};
  let viewModeStyles = {};

  if (editMode) {
    viewModeStyles.display = "none"
  } else {
    editModeStyles.display = "none";
  }

  const handleEditing = () => {
    setEditMode(true)
  };

  const handleUpdateDone = (e) => {
    if (e.key === "Enter") {
      setEditMode(false)
    }
  }

  const context = useContext(Context);
  const { handleChangeProps, handleDeleteTodoProps, handleItemUpdate } = context;

  return (    
    <li className={styles.item}>   
      <div onDoubleClick={handleEditing} style={viewModeStyles}>
        <label htmlFor={id}>
          <input 
            type="checkbox" 
            id={id}
            className={styles.checkbox}
            checked={completed} 
            onChange={() => handleChangeProps(id)} /> 
          <span className={completed ? styles.completed : null}>
            {title}
          </span>
        </label>
        <button 
          onClick={() => handleDeleteTodoProps(id)}>
          <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
        </button>
      </div>  
      <input 
        type="text" 
        className={styles.textInput} 
        style={editModeStyles} 
        value={title} 
        onChange={e => {
          handleItemUpdate(e.target.value, id)
        }} 
        onKeyDown={handleUpdateDone} />                                
    </li>        
  );
}

export default TodoItem;
