import { Reducer } from "react";

import initialData from "./initialData";
import { TaskListState, TaskActions, TaskListAvailableAction } from "./types";


export const initialState: TaskListState = {
    projectData: initialData,
    isLoading: false,
    isError: false,
    errorMessage: ""
}
export const taskReducer: Reducer<TaskListState, TaskActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case TaskListAvailableAction.FETCH_TASKS_REQUEST:
            return { ...state, isLoading: true };
        case TaskListAvailableAction.FETCH_TASKS_SUCCESS:
            return { ...state, isLoading: false, projectData: action.payload };
        case TaskListAvailableAction.FETCH_TASKS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload,
            };

        case TaskListAvailableAction.DELETE_TASKS_REQUEST:
            return { ...state, isLoading: true };
        case TaskListAvailableAction.DELETE_TASKS_SUCCESS:
            return { ...state, isLoading: false };
        case TaskListAvailableAction.DELETE_TASKS_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload,
            };
        case TaskListAvailableAction.CREATE_TASK_REQUEST:
            return { ...state, isLoading: true };
        case TaskListAvailableAction.CREATE_TASK_SUCCESS:
            return { ...state, isLoading: false };
        case TaskListAvailableAction.CREATE_TASK_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload,
            };
        // Toggle the loading state based on action
        case TaskListAvailableAction.UPDATE_TASK_REQUEST:
            return { ...state, isLoading: true };
        case TaskListAvailableAction.UPDATE_TASK_SUCCESS:
            return { ...state, isLoading: false };
        case TaskListAvailableAction.UPDATE_TASK_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: true,
                errorMessage: action.payload,
            };
        case TaskListAvailableAction.REORDER_TASKS:
            return { ...state, isLoading: false, projectData: action.payload };
        default:
            return state;
    }
};
// export const deleteTask = async (
//     dispatch: TasksDispatch,
//     projectID: string,
//     task: TaskDetails
// ) => {
//     const token = localStorage.getItem("authToken") ?? "";
//     try {
//         dispatch({ type: TaskListAvailableAction.DELETE_TASKS_REQUEST });
//         const response = await fetch(
//             `${API_ENDPOINT}/projects/${projectID}/tasks/${task.id}`,
//             {
//                 method: "DELETE",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`,
//                 },
//                 body: JSON.stringify(task),
//             }
//         );

//         if (!response.ok) {
//             throw new Error("Failed to delete task");
//         }
//         dispatch({ type: TaskListAvailableAction.DELETE_TASKS_SUCCESS });
//         refreshTasks(dispatch, projectID);
//     } catch (error) {
//         console.error("Operation failed:", error);
//         dispatch({
//             type: TaskListAvailableAction.DELETE_TASKS_FAILURE,
//             payload: "Unable to delete task",
//         });
//     }
// };