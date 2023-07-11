import { API_ENDPOINT } from "../../config/constants";
import { CommentsDispatch, CommentListAvailableAction, CommentsDataPayload } from "./types";

export const FetchComments = async (
    dispatch: CommentsDispatch,
    project_id: string,
    task_id: string
) => {
    const token = localStorage.getItem("authToken") ?? ''
    try {
        dispatch({ type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST })
        const res = await fetch(`${API_ENDPOINT}/projects/${project_id}/tasks/${task_id}/comments`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        })
        if (!res.ok) {
            throw new Error("Failed to Fetch Comments")
        }
        const data = await res.json();
        dispatch({ type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS, payload: data })
    } catch (error) {
        console.log(`Operation Failed:${error}`)
        dispatch({ type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE, payload: "Unable to Load Comments" })
    }
}
export const AddComments = async (
    dispatch: CommentsDispatch,
    project_id: string,
    task_id: string,
    desc: CommentsDataPayload
) => {
    const token = localStorage.getItem("authToken") ?? "";
    try {
        dispatch({ type: CommentListAvailableAction.CREATE_COMMENT_REQUEST })

        const res = await fetch(`${API_ENDPOINT}/projects/${project_id}/tasks/${task_id}/comments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(desc)
        })
        if (!res.ok) {
            throw new Error("Failed to Create Task")
        }
        const data = await res.json()
        dispatch({ type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS, payload: data })
        FetchComments(dispatch, project_id, task_id)
    } catch (error) {
        console.log(`Operation Failed:${error}`)
        dispatch({ type: CommentListAvailableAction.CREATE_COMMENT_FAILURE, payload: "Failed To Create" })
    }
}
