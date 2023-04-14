import React from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}
class TaskApp extends React.Component<TaskAppProp, TaskAppState> {
  constructor(props: TaskAppProp) {
    super(props);
    this.state = {
      tasks: [],
    };
  }
  addTask = (task: TaskItem) => {
    this.setState((state, props) => {
      return {
        tasks: [...state.tasks, task],
      };
    });
  };
  render() {
    return (
      <div className="m-5 mx-40 font-medium">
        <h1 className="text-3xl">Smarter Tasks</h1>
        <p className="text-small my-1">
          Project: Graduation Final Year Project(Revamp College Website)
        </p>
        <div className="flex justify-evenly items-center font-medium my-10">
          <div className="border border-slate-700 rounded p-7 w-96 h-max">
            <TaskForm addTask={this.addTask} />
            <TaskList tasks={this.state.tasks} />
          </div>
        </div>
      </div>
    );
  }
}

export default TaskApp;
