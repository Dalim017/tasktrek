import React from "react";
import Todo from "../assets/direct-hit.png";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
const TaskColumn = ({ title, icon }) => {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img src={icon} alt="Todo" className="task_column_icon"></img>
        {title}
      </h2>

      <TaskCard />
    </section>
  );
};

export default TaskColumn;
