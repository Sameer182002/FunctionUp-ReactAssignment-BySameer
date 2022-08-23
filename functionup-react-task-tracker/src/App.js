import { useState,useEffect } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask,setShowAddTask]=useState(false)
  const [tasks, setTasks] = useState([]);
  useEffect(()=>{
    const fetchTasks= async ()=> {
      const res= await fetch('https://localhost:5000/tasks')
      const data= await res.json()
      console.log(data);
    }
    fetchTasks()
  },[])
  // -----------------------[ Add Task ]-------------------
const addTask =(task) => {
  const id=Math.floor(Math.random()*10000)+1
  const newTask={id,...task}
  setTasks([...tasks,newTask])
  // console.log(id,task);
} 

  // -----------------------[ Delete Task ]-------------------
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // -----------------------[ Toggle Reminder ]-------------------
  const toggleReminder= (id)=>{
    setTasks(tasks.map((task)=>task.id ===id ? {...task,reminder:!task.reminder} :task
    )
    )
  }
  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder}/>
      ) : (
        "NoW Your All Tasks Are Completed !!!"
      )}
    </div>
  );
};

export default App;
