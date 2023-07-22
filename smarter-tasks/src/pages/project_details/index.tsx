import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { TasksProvider } from "../../context/task/context";
import ErrorBoundary from "../../components/ErrorBoundary";
const ProjectDetails = React.lazy(() => import("./ProjectDetails"));

const ProjectDetailsIndex: React.FC = () => {
  return (
    <TasksProvider>
      <ErrorBoundary>
        <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
          <ProjectDetails />
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    </TasksProvider>
  );
};

export default ProjectDetailsIndex;
