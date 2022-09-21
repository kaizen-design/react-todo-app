import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"
 
const TodoInput = (props) => {  
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
      props.handleAddTodoItemProps(inputText.title);
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
