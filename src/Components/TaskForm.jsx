import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "../Components/Tag";
const taskForm = () => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
  });

  const handleChange = (e) => {
    const [name, value] = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const hanldleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };
  //   const [task, setTask] = useState("");
  //   const [status, setStatus] = useState("todo");

  //   const handleTaskChange = (e) => {
  //     setTask(e.target.value);
  //   };

  //   const handleStatusChange = (e) => {
  //     setStatus(e.target.value);
  //   };
  return (
    <div>
      <header className="app_header">
        <form onSubmit={hanldleSubmit}>
          <input
            type="text"
            name="task"
            className="task_input"
            placeholder="Enter Your Task"
            onChange={handleChange}
          />

          <div className="task_form_bottom_line">
            <div>
              <Tag tagName="HTML"></Tag>
              <Tag tagName="CSS"></Tag>
              <Tag tagName="JavaScript"></Tag>
              <Tag tagName="React"></Tag>
            </div>

            <div>
              <select
                name="status"
                className="task_status"
                onChange={handleChange}
              >
                <option value="todo">To do</option>
                <option value="doing">Doing</option>
                <option value="done">Done</option>
              </select>
              <button type="submit" className="task_submit">
                + Add Task
              </button>
            </div>
          </div>
        </form>
      </header>
    </div>
  );
};

export default taskForm;
