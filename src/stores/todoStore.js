import { extendObservable, action } from 'mobx';
import remotedev from 'mobx-remotedev/lib';

class Todos {
  constructor(){
  	extendObservable(this,{
	    todos: [{ name:"foo", completed:false}, { name:"bar", completed:true}],
	    activeEditContent:null,
	    editTodo:action((index) => {
	      let todos = this.todos.slice();
	      todos[index].index = index;
	      this.activeEditContent = Object.assign({},todos[index]);
	    }),
	    makeChange:action((newContentName) => {
    	 //remove Previous content from todos
    	 let todos = this.todos.slice();
    	
    	 //make new todo
    	 let newContentObject = {};
    	 newContentObject['name'] = newContentName;
    	 newContentObject['completed'] = false;

    	 todos[this.activeEditContent.index] = newContentObject;

    	 this.todos = todos;
    	 this.activeEditContent = null;
	    }),
	    addTodo:action((name) => {
	     if(!name){
	     	alert("Please enter Something");
	     	return;
	      }
	      let newTodo = {};
	      newTodo.name = name;
		    newTodo.completed = false;
	      this.todos = this.todos.concat(newTodo)
	    }),
	    get getTodos() {
          return this.todos
        },
        get completedTodos(){
         return this.todos.filter((todo) => todo.completed)
        },
	    removeTodo:action((index) => {
	      let todos = this.todos.slice();
	      todos.splice(index,1);
	      this.todos = todos;
	    }),
	    completed:action((index) => {
	      let todos = this.todos.slice();
	      todos[index].completed =  !todos[index].completed
	      this.todos = todos;
	    }),
	    changeContent:action((index, content) => {
	      let todos = this.todos.slice();
	      todos[index].name =  content
	      this.todos = todos;
	    })
   })
  }   
}


export default remotedev(new Todos());

export {
 Todos
}