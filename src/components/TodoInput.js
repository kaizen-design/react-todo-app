import React from "react";

class TodoInput extends React.Component {   
  state = {
    title: ''
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.handleAddTodoItemProps(this.state.title);
      this.setState({
        title: ''
      })
    } else {
      alert('Please enter the title.')
    }
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          name="title"
          placeholder="Add Todo..." 
          value={this.state.title} 
          onChange={this.onChange} />
        <button>Submit</button>
      </form>
    );
  }
}
export default TodoInput;
