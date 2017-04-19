import React from 'react';
import { Todos } from './stores/todoStore'

describe("TodoStore", function(){
 beforeEach(function() {
   this.store = new Todos();
 });
  // Add Data to list
  it('Add to in a List', function(){
   this.store.addTodo({ name:'Todo1', completed:false });
   expect(this.store.todos.length).toBe(3);
  });

  it('Remove to in a List', function(){
     this.store.removeTodo(0);
     expect(this.store.todos[0].name).toBe("bar");
  });
});

