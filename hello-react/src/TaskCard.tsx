import React from "react";
import "./TaskCard.css";

interface Tasks {
  title: string;
  dueDate: string;
  completedAtDate: string;
  assigneeName: string;
}

const card = (props: {
  title: string;
  dueDate: string;
  completedAtDate: string;
  assigneeName: string;
}) => {
  const TaksItem: Tasks = {
    title: props.title,
    dueDate: props.dueDate,
    completedAtDate: props.completedAtDate,
    assigneeName: props.assigneeName,
  };
  return (
    <div className="my-7 border p-4 border-black rounded w-full">
      <h2 className="my-2 text-lg">{TaksItem.title}</h2>

      {props.dueDate ? (
        <h3 className="text-sm">Due on: {TaksItem.dueDate}</h3>
      ) : (
        <h3 className="text-sm">Completed on: {TaksItem.completedAtDate}</h3>
      )}
      <h3 className="text-sm">Assignee: {TaksItem.assigneeName}</h3>
    </div>
  );
};

export default card;
