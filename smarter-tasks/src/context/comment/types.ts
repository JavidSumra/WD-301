export type CommentDetail = {
    id: number;
    description: string;
    task_id: number;
    owner: number;
    user: User;
    createdAt: string;
    lastUpdatedAt: string;
}
interface User {
    id: number;
    name: string;
    email: string;
}

export interface CommentListState {
    commentData: CommentsData[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}
export enum CommentListAvailableAction {
    FETCH_COMMENTS_REQUEST = "FETCH_COMMENTS_REQUEST",
    FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
    FETCH_COMMENTS_FAILURE = "FETCH_COMMENTS_FAILURE",

    CREATE_COMMENT_REQUEST = "CREATE_COMMENT_REQUEST",
    CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS",
    CREATE_COMMENT_FAILURE = "CREATE_COMMENT_FAILURE",
}
export type CommentActions =
    | { type: CommentListAvailableAction.FETCH_COMMENTS_REQUEST }
    | { type: CommentListAvailableAction.FETCH_COMMENTS_SUCCESS, payload: CommentsData[] }
    | { type: CommentListAvailableAction.FETCH_COMMENTS_FAILURE, payload: string }
    | { type: CommentListAvailableAction.CREATE_COMMENT_REQUEST }
    | { type: CommentListAvailableAction.CREATE_COMMENT_SUCCESS }
    | { type: CommentListAvailableAction.CREATE_COMMENT_FAILURE, payload: string }


export type CommentsData = Omit<CommentDetail, "user" | "lastUpdatedAt" | "id">
export type CommentsDataPayload = Pick<CommentDetail, "description">

export type CommentsDispatch = React.Dispatch<CommentActions>