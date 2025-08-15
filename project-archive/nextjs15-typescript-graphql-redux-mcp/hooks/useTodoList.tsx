import { useState } from "react";

export interface Todo {
  action: string,
  completed: boolean,

}

export default function useTodoList(){
 
  const [todoList, setTodoList] = useState([]);

const addTodo = ()=> {

}
const removeTodo = ()=> {

}
const updateTodo = ()=> {

}
  return {todoList, addTodo, };
}