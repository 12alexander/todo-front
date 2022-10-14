import { TodoSearch } from './components/TodoSearch'
import { TodoCard } from './components/TodoCard'
import { useState, useEffect } from 'react';
import {GetTask} from "./api/task"
import './App.css'


function App() {
  const [stateTask,setStateTask] = useState([]);  
  const getTask =  async ()=>{
    const dataTask = await GetTask();
    setStateTask(dataTask);    
  }

  useState(()=>getTask(),[]);

  return (
    <>
    <h1>Todo List</h1>
    <TodoSearch state = {stateTask} setState = {setStateTask}></TodoSearch>
    <TodoCard stateTask = {stateTask}></TodoCard>
    </>
  )
}

export default App
