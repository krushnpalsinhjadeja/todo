import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title : ''
  };

  onChange = (e) => this.setState({title: e.target.value});

  render() {
    return (
      <form>
        <input type="text" name="title" value={ this.state.title } onChange={this.onChange} placeholder="Add todo" />
        <input type="submit" />
      </form>
    );
  }
}

export default AddTodo;
