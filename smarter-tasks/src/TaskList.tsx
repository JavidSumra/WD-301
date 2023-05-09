import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  removeTask: (title: string) => void;
}

interface State {}

const TaskList = (props: Props) => {
  const list = props.tasks.map((task) => (
    <Task
      id={task.id}
      title={task.title}
      dueDate={task.dueDate}
      description={task.description}
      removeTask={props.removeTask}
    />
  ));
  return (
    <>
      <ul>{list}</ul>
    </>
  );
};

export default TaskList;
