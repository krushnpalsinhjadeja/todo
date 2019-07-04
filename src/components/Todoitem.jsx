import React, { Component } from 'react';


class Todoitem extends Component {
    state = {  }

    getStyle = () => {
        return {
            background: '#f4f4f4',
            borderBottom : '2px red solid',
            textDecoration : this.props.todos.completed ? 'line-through' : 'none'
        }
    }

    render() { 
        const {id, title} = this.props.todos
        const btnStyle = {
            background : 'blue',
            marginLeft : '30px',
            color : 'white',
            borderRadius: '2px',
            padding : '5px'
        }
        return ( 
            <div style={this.getStyle()}>
               <input type="checkbox" onChange={this.props.markChange.bind(this,id)}></input>
               { title } 
               <button style={btnStyle} onClick={this.props.deleteList.bind(this, id)}>Delete</button>
               
            </div>
         );
    }
    }
 
export default Todoitem;