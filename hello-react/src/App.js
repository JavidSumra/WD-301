import Task from "./TaskCard";

function App() {
  return (
    <div className="m-5 mx-40 font-medium">
      <h1 className="text-3xl">Smarter Tasks</h1>
      <p className="text-small my-1">
        Project: Graduation Final Year Project(Revamp College Website)
      </p>
      <div className="flex justify-evenly items-center font-medium my-10">
        <div className="border border-slate-700 rounded p-7 w-96 h-max">
          <h2 className="text-2xl text-center">Pending</h2>
          <div>
            <Task
              title="Build the website with static content"
              dueDate="10th September"
              assigneeName="Rohit S"
            />
            <Task
              title="Add a blog"
              dueDate="22nd December"
              assigneeName="Rohit M"
            />
          </div>
          <div className="text-2xl bg-slate-300 rounded p-2 cursor-pointer">
            <span>+ New Task</span>
          </div>
        </div>
        <div className="border border-slate-700 rounded p-7">
          <h2 className="text-2xl text-center">Done</h2>
          <Task
            title="Design the mockup"
            completedAtDate="10th March"
            assigneeName="Rohit M"
          />
          <Task
            title="Get the approval from principal"
            completedAtDate="20th February"
            assigneeName="Ajay S"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
