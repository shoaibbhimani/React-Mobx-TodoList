import { Todos } from "./todoStore.js"
import { toJS } from "mobx"

describe("Unit Testing for Todo Store", () => {
  let todoStore = new Todos();	
   it("Checking Default State",() => {
     let todosLen = todoStore.todos.length;		
   	 expect(todosLen).toBe(2)
   	 expect(toJS(todoStore.todos)).toEqual([{ name:"foo", completed:false}, { name:"bar", completed:true}])
   })

})