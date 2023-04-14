import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
}
// interface TaskItem {
//   title: string;
// }
interface State {}

class TaskList extends React.Component<Props, State> {
  //   componentDidMount() {
  //     const tasks = [{ title: "Buy New Home" }, { title: "New Assignment" }];
  //     this.setState((state, props) => ({
  //       tasks,
  //     }));
  //   }
  //   constructor(props: Props) {
  //     super(props);
  //     this.state = {
  //       tasks: [{ title: "Pay Rent" }, { title: "Submit Assignment" }],
  //     };
  //   }
  render() {
    return this.props.tasks.map((task, idx) => (
      <Task
        key={idx}
        title={task.title}
        dueDate={task.dueDate}
        description={task.description}
      />
    ));
  }
}

export default TaskList;
