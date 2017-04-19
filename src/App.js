import React, { Component } from 'react';
import './App.css';
import { observer, inject } from 'mobx-react'
import EditTodo from './EditTodo.js';

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <div className="col-sm-4 col-sm-offset-4">
          <form onSubmit={(e) => {
          	 e.preventDefault();
          	 store.todostore.addTodo(this.refs.content.value);
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
         
          <ul className="list-group">
          	{store.todostore.getTodos.map((todo, index) => {
			 return (
			  <li
			    className="list-group-item"
				onClick={() => store.todostore.completed(index)}
				key={index}>
				  {todo.name}
				<button onClick={(e) => {
                  e.stopPropagation();
                  store.todostore.removeTodo(index)
                 }}>
			      Remove
				</button>
				<button onClick={(e) => {
                  e.stopPropagation();
                  store.todostore.editTodo(index)
                }}>
				  Edit
				</button>
				</li>

			)})}
          </ul>
          { store.todostore.completedTodos.length ?  <strong>Completed Todos </strong> : null  }
           <ul className="list-group">
          	{store.todostore.completedTodos.map((todo, index) => {
			  return <li className="list-group-item" key={index}>{todo.name}</li>
            })}
          </ul>

          <section>
          {store.todostore.activeEditContent ? <EditTodo  /> : null}
          </section>
       </div>
    );
  }
}




export default inject(['store'])(observer(App));
