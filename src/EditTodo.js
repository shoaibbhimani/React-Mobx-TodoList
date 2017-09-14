import { observer, inject } from 'mobx-react'
import React, { Component } from 'react';
class EditTodo extends Component {

	editFormComplete = (e) => {
		const { editForSubmit } = this.props;
		e.preventDefault();
		editForSubmit(this.refs.edittodo.value)
		this.refs.edittodo.value = "";

	}

	render(){
	 const { todo, toggleIsEditing } = this.props;
	  return (
		<div>
		   <form onSubmit={this.editFormComplete}>
		    	<div className="input-group">
		       	<input 
		       	  type="text" 
		       	  ref="edittodo" 
		       	  defaultValue={todo.name}
		       	  className="form-control" 
		       	  placeholder="Search for..." />
		    	  <span className="input-group-btn">
		             <button 
		               className="btn btn-default"
		               type="submit">
		               Save 
		             </button>	
		          </span>
			    </div>
	          </form> 
		  </div>
		)
	}
}


export default observer(EditTodo); 