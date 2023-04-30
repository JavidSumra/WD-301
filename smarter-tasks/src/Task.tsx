import React from "react";
import "./TaskCard.css";

interface TaskProp {
  title: string;
  dueDate: string;
  description: string;
}

class Task extends React.Component<TaskProp> {
  render() {
    return (
      <div className="TaskItem">
        <hr />
        <div className="shadow-md border border-slate-100 p-2 m-2">
          <h2 className="text-base font-bold my-1">{this.props.title}</h2>
          <p className="text-sm text-slate-500">{this.props.dueDate}</p>
          <p className="text-sm text-slate-500">
            Description:{this.props.description}
          </p>
        </div>
      </div>
    );
  }
}

export default Task;