import React from "react";
import { useMembersState } from "../../context/members/context";
import { useCommentsState } from "../../context/comment/context";
const CommentListItem = () => {
  const membersState = useMembersState();
  const state = useCommentsState();
  const { commentData, isLoading, isError, errorMessage } = state;
  const getUser = (userId: number): string | undefined => {
    const user = membersState?.members?.filter((mem) => mem.id === userId)?.[0];
    return user?.name;
  };
  console.log(state.commentData);
  const getDate = (createdDate: string): string => {
    let date = new Date(createdDate);
    return `${date.toLocaleDateString("en-In")} | ${date.toLocaleTimeString(
      "en-In"
    )}`;
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>{state.errorMessage}</div>;
  }

  return (
    <div className="mt-4">
      {Array.isArray(commentData) &&
        commentData.map((comment) => {
          return (
            <div
              key={comment.createdAt}
              className="comment my-2 font-medium border-b border-dashed border-black"
            >
              <div className="flex justify-between flex-wrap">
                <div>{comment.description}</div>
                <div className="uppercase">{getDate(comment.createdAt)}</div>
              </div>
              <div>{getUser(comment.owner)}</div>
            </div>
          );
        })}
    </div>
  );
};

export default CommentListItem;
