import React,{useState} from "react";
import TaskHeader from "./TaskHeader/TaskHeader"
import styles from "./taskApp.module.css";
import AddTask from "./AddTask/AddTask"
import Tasks from "./Tasks/Tasks"
import tasks from "../data/tasks.json"
const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  let [newtasks,settasks]=useState(tasks)
  let [totaltask,settotal]=useState(newtasks.length)
  console.log(newtasks)
  // settotal(newtasks.length)
let deleteiteam=(id)=>{
console.log(id)
let nayatasks=newtasks.filter((el)=>{
return(el.id!==id)
})
settasks(nayatasks)
settotal(nayatasks.length)
}
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader totaltask={totaltask}/>
      <AddTask newtasks={newtasks} settasks={settasks} settotal={settotal} />
      <Tasks newtasks={newtasks} deleteiteam={deleteiteam}/>
    </div>
  );
};

export default TaskApp;
