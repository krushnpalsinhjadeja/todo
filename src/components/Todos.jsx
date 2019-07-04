import React, { Component } from 'react';
import Todoitem from './Todoitem'

class Todos extends Component {
    state = {  }

   
    render() { 
        
        return this.props.todos.map((todos) =>(
            <Todoitem 
                todos ={ todos }  
                key={todos.id}
                markChange={ this.props.markChange } 
                deleteList={ this.props.deleteList } 
            />
        ));
    }
}
 
export default Todos;