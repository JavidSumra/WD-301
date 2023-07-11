import React, { createContext, useContext, useReducer } from "react";
import { CommentReducer, initialState } from "./reducer";
import { CommentListState, CommentsDispatch } from "./types";

const CommentsStateContext = createContext<CommentListState>(initialState);
const CommentsDispatchContext = createContext<CommentsDispatch>(() => {});

export const CommentsProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [state, dispacth] = useReducer(CommentReducer, initialState);
  return (
    <CommentsStateContext.Provider value={state}>
      <CommentsDispatchContext.Provider value={dispacth}>
        {children}
      </CommentsDispatchContext.Provider>
    </CommentsStateContext.Provider>
  );
};

export const useCommentsState = () => useContext(CommentsStateContext);
export const useCommentsDispatch = () => useContext(CommentsDispatchContext);
