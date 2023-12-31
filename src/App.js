import './App.css';
import { TodoCounter  } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton  } from './components/CreateTodoButton';
import React from 'react';

const defaultTodos = []

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");


  const completed = todos.filter(todo => todo.completed).length;
  const total = todos.length;
  const filterPattern = new RegExp(searchValue, "gi")
  const todoFilters = searchValue ? todos.filter(todo=>filterPattern.test(todo.text)): todos;
  const completeTodo = (todoCompletedKey)=>{
    const newTodos = [...todos];
    const todoIndexSelected = newTodos.findIndex(todo=>todo.text == todoCompletedKey);
    newTodos[todoIndexSelected].completed = true;
    setTodos(newTodos);
  }
  const deleteTodo = (todoDeleteKey)=>{
    const newTodos = todos.filter(todo=>todo.text != todoDeleteKey)
    setTodos(newTodos);
  } 

  return (
    <>
      <TodoCounter completed={completed} total={total} />
      <TodoSearch searchValue={searchValue}  setSearchValue={setSearchValue} />
      <TodoList>
        {todoFilters.map(todo=>(
          <TodoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              onComplete={()=>{completeTodo((todo.text))}}
              onDelete={()=>{deleteTodo(todo.text)}}
          />
        ))}

      </TodoList>
      <CreateTodoButton  todos={todos} setTodos={setTodos}/>
    </>
  );
}


export default App;
