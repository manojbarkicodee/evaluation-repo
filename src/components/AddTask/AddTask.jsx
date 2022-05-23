import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  let [value,setvalue]=useState("")
  // console.log(props.newtasks)
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" onChange={(e)=>{
setvalue(e.target.value)
      }}  type="text" />
      <button data-cy="add-task-button" onClick={()=>{
        if(value!==""){
          props.settasks([...props.newtasks, {id:Date.now(),
            text: value,
            done: false,
            count: 1}])
          }

props.settotal(props.newtasks.length)
      }}>+</button>

    </div>
  );
};

export default AddTask;
