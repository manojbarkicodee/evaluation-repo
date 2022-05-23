import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = (props) => {
  // sample values to be replaced
  // let totalTask = 0;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <b data-cy="header-remaining-task">{unCompletedTask}</b>
      <b data-cy="header-total-task">{props.totaltask}</b>
      
    </div>
  );
};

export default TaskHeader;
