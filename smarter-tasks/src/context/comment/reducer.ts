import { Reducer } from "react";
import { CommentListState, CommentActions, CommentListAvailableAction } from "./types";

export const initialState: CommentListState = {
    commentData: [],
    isError: false,
    isLoading: false,
    errorMessage: ""
}

export const CommentReducer: Reducer<CommentListState, CommentActions> = (
    state = initialState,
    action
) => {
    switch (action.type) {
        case CommentListAvailableAction.FETCH_COMMENTS_REQUEST:
            return { ...state, isLoading: true }
        case CommentListAvailableAction.FETCH_COMMENTS_SUCCESS:
            return { ...state, isLoading: false, commentData: action.payload }
        case CommentListAvailableAction.FETCH_COMMENTS_FAILURE:
            return { ...state, isLoading: false, isError: true, errorMessage: action.payload }

        case CommentListAvailableAction.CREATE_COMMENT_REQUEST:
            return { ...state, isLoading: true }
        case CommentListAvailableAction.CREATE_COMMENT_SUCCESS:
            return { ...state, isLoading: false }
        case CommentListAvailableAction.CREATE_COMMENT_FAILURE:
            return { ...state, isLoading: false, isError: true, errorMessage: action.payload }
        default:
            return state;
    }
}