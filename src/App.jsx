import React,{useState} from 'react'
import Input from'./component/input'
function App() {
  let [todo,setTodo]=useState([
    {
    id:1,
    title:"Task-1",
    description:"This is the description for task-1",
    status:true

  },
  {
    id:2,
    title:"Task-2",
    description:"This is the description for task-2",
    status:false
    
  },
  {
    id:3,
    title:"Task-3",
    description:"This is the description for task-3",
    status:false
    
  }
])
let [completed,setCompleted]=useState("All")
  return (<>
  <Input todo={todo} setTodo={setTodo} completed={completed} setCompleted={setCompleted}/>
  </>
)}

export default App

