import React, { useState, useContext } from "react";
import { Context } from "../context";
import { FaPlusCircle } from "react-icons/fa"
 
const TodoInput = () => {  

  const value = useContext(Context);
  const { handleAddTodoItemProps } = value;

  const [inputText, setInputText] = useState({
    title: ''
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      handleAddTodoItemProps(inputText.title);
      setInputText({
        title: ''
      })
    } else {
      alert('Please enter the title.')
    }    
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input 
        type="text" 
        name="title"
        className="input-text"
        placeholder="Add Todo..." 
        value={inputText.title} 
        onChange={onChange} />
      <button>
        <FaPlusCircle style={{ color: "darkcyan", fontSize: "20px", marginTop: "2px" }} />
      </button>
    </form>
  );
}

export default TodoInput;
