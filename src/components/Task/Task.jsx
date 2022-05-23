import React from "react";
import styles from "./task.module.css";

const Task = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" />
      <div data-cy="task-text" key={props.task.id}>{props.task.text}</div>
      {/* Counter here */}
      <button data-cy="task-remove-button" onClick={()=>{
        props.deleteiteam(props.task.id)
      }}>X</button>
    </li>
  );
};

export default Task;
