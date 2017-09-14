import React from 'react';
import { observer  } from "mobx-react"
import { extendObservable, action } from "mobx"

import EditTodo from "./EditTodo.js"

class TodoItem extends React.Component {
	constructor(){
		super()
		this.todoItemLocalState = extendObservable(this, {
			isEditing:false,
			toggleIsEditing:action((val) => {
				this.isEditing = val;
			})
		})
	}

	completed = () => {
		this.props.completed(this.props.index)
	}

	removeTodo = () => {
		this.props.removeTodo(this.props.index)
	}

	editTodo = () => {
		this.todoItemLocalState.toggleIsEditing(true);
	}

	editForSubmit = (newValue) => {
		this.props.editForSubmit({
			index:this.props.index,
			newName:newValue
		})
		this.todoItemLocalState.toggleIsEditing(false);
	}



	render(){ 
		const { todo } = this.props;
		return (
			<li className="list-group-item">
		{
			this.todoItemLocalState.isEditing ? <EditTodo 
				todo={todo}
				editForSubmit={this.editForSubmit}
			 /> : <span
			    
				style={ todo.completed ? {
                  textDecoration: 'line-through',
                  color: '#ccc'

				}: null }
				
				>
				  <div onClick={this.completed}>{todo.name}</div>
				<button onClick={this.removeTodo}>
			      Remove
				</button>
				<button onClick={this.editTodo}>
				  Edit
				</button>
				</span>  	
		}
            </li>
		
		)
	}
}

export default observer(TodoItem);