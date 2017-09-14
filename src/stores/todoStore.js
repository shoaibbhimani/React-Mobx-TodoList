import { extendObservable, action, observable } from 'mobx';
import remotedev from 'mobx-remotedev/lib';
import { delorean } from 'mobx-delorean';

class Todos {
  constructor(){
  	extendObservable(this,{
	    todos: [{ name:"foo", completed:false}, { name:"bar", completed:true}],
	    activeEditContent:null,
	    editTodo:action(({ index, newName }) => {
	    	this.todos = this.todos.map((todo, todoIndex) => {
	    		return index === todoIndex ? {
	    			...todo,
	    			name:newName	
	    		} : todo
	    	})
	    }),
	    addTodo:action((name) => {
	     if(!name){
	     	alert("Please enter Something");
	     	return;
	      }
	      let newTodo = {
	      	name,
	      	completed:false
	      };
	      this.todos = this.todos.concat(newTodo)
	    }),
	    get getTodos() {
          return this.todos
        },
        get completedTodos(){
         return this.todos.filter((todo) => todo.completed)
        },
	    removeTodo:action((index) => { 
	       debugger	
	      this.todos = this.todos.filter((todo, todoIndex) => {
	      	return index !== todoIndex;
	      });
	    }),
	    completed:action((index) => {
	      this.todos = this.todos.map((todo, todoIndex) => {
	      	return todoIndex === index ? {
	      		...todo,
	      		completed:!todo.completed
	      	} : todo
	      });
	    }),
	    changeContent:action((index, content) => {
	      this.todos = this.todos = this.todos.map((todo, todoIndex) => {
	      	return todoIndex === index ? {
	      		...todo,
	      		name:content
	      	} : todo
	      });
	    })
   })
  }   
}


export default delorean(new Todos());

export {
 Todos
}