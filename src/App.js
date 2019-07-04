import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/layout/AddTodo';


class App extends Component {
  state = { 
      todos : [
        {
          id: 1 ,
          title : 'move to tresh',
          completed : false
        },
        {
          id: 2 ,
          title : 'move to lunch',
          completed : false
        },
        {
          id: 3,
          title : 'move to dinner',
          completed : false
        }
      ]
   }

  markChange = (id) => {
    this.setState({ todos: this.state.todos.map(todos => {
      if(todos.id === id){
        todos.completed = !todos.completed;
      }
      return todos;
    }) });
  }

  deleteList = (id) => {
    this.setState({ todos : [...this.state.todos.filter(todos => todos.id !== id)]
      });
  }

  render() { 
    return ( 
      <div className="App">
        <Header />
        <AddTodo />
        <Todos 
          todos={this.state.todos} 
          markChange = { this.markChange } 
          deleteList = { this.deleteList }
          />
      </div>
     );
  }
}
 
export default App;




