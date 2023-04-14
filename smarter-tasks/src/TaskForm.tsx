import React from "react";
import "./TaskCard.css";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}
interface TaskFormState {
  title: string;
  dueDate: string;
  description: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      dueDate: new Date().toLocaleDateString("af-ZA"),
      description: "",
    };
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      dueDate: this.state.dueDate,
      description: this.state.description,
    };
    // console.log(`Submitted the Form ${this.inputRef.current?.value}`);
    this.props.addTask(newTask);
    this.setState({ title: "", dueDate: "", description: "" });
  };
  //   inputRef = React.createRef<HTMLInputElement>();
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  dateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ dueDate: event.target.value });
  };
  discChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.addTask} className="text-2xl">
        <input
          type="text"
          value={this.state.title}
          onChange={this.titleChanged}
          id="todoTitle"
          className="border rounded border-black p-2 text-xl m-2"
          placeholder="Enter Title"
          required
        />
        <input
          type="date"
          value={this.state.dueDate}
          onChange={this.dateChanged}
          id="todoDueDate"
          className="border rounded border-black p-2 text-xl m-2"
          required
        />
        <input
          type="text"
          value={this.state.description}
          onChange={this.discChanged}
          id="todoDescription"
          className="border rounded border-black p-2 text-xl m-2"
          placeholder="Enter Description"
          required
        />
        <button
          type="submit"
          id="addTaskButton"
          className="text-center w-full bg-green-400 p-1 rounded"
        >
          Add Task
        </button>
      </form>
    );
  }
}

export default TaskForm;
