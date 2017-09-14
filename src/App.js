import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react'
import { DeloreanTools } from 'mobx-delorean';

import TodoItem from "./TodoItem.js"

class App extends Component {
  render() {
    const { todostore } = this.props;
    return (
      <div className="col-sm-4 col-sm-offset-4">
          <form onSubmit={(e) => {
          	 e.preventDefault();
          	 todostore.addTodo(this.refs.content.value);
          	 this.refs.content.value = "";
           }}>
	    	<div className="input-group">
	       	<input 
	       	  type="text" 
	       	  ref="content" 
	       	  className="form-control" 
	       	  placeholder="Add Todo" />
	    	  <span className="input-group-btn">
	             <button 
	               className="btn btn-default"
	               type="submit">
	               Add Content
	             </button>	
	          </span>
		    </div>
          </form>

          <DeloreanTools />
         
          <ul className="list-group">
          	{todostore.getTodos.map((todo, index) => {
			      return  <TodoItem 
                      key={index}
                      index={index}
                      completed={todostore.completed}
                      removeTodo={todostore.removeTodo}
                      editForSubmit={todostore.editTodo}
                      todo={todo} />
      })}
          </ul>
          { todostore.completedTodos.length ?  <strong>Completed Todos </strong> : null  }
           <ul className="list-group">
          	{todostore.completedTodos.map((todo, index) => {
			        return <li key={index} className="list-group-item">{todo.name}</li>
            })}
          </ul>

       </div>
    );
  }
}




export default inject('todostore')(observer(App));
