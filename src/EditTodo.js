import { observer, inject } from 'mobx-react'
import React, { Component } from 'react';
class EditTodo extends Component {
	render(){
	  const { store } = this.props;
	  return (
		<div className={store.todostore.activeEditContent ? 'active' : 'hide'} >
		   <form onSubmit={(e) => {
	          	 e.preventDefault();
	          	 store.todostore.makeChange(this.refs.editContent.value);
	          	 this.refs.editContent.value = "";
	           }}>
		    	<div className="input-group">
		       	<input 
		       	  type="text" 
		       	  ref="editContent" 
		       	  value={store.todostore.activeEditContent.name || ''}
		       	  className="form-control" 
		       	  onChange={() => store.todostore.activeEditContent.name = this.refs.editContent.value}
		       	  placeholder="Search for..." />
		    	  <span className="input-group-btn">
		             <button 
		               className="btn btn-default"
		               type="submit">
		               Edit Content
		             </button>	
		          </span>
			    </div>
	          </form> 
		  </div>
		)
	}
}


export default inject(['store'])(observer(EditTodo)); 