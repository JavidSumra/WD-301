import React from "react";
import { useParams } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { AddComments } from "../../context/comment/actions";
import { useCommentsDispatch } from "../../context/comment/context";
import { CommentsDataPayload } from "../../context/comment/types";
import CommentListItem from "./CommentListItem";
const CommentForm = () => {
  const comDispatch = useCommentsDispatch();
  const { projectID, taskID } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentsDataPayload>({});
  const onSubmit: SubmitHandler<CommentsDataPayload> = async (commentData) => {
    const { description } = commentData;
    await AddComments(comDispatch, `${projectID}`, `${taskID}`, {
      description,
    });
  };
  return (
    <div className="hero bg-gredient-dark h-400px flex flex-col px-2">
      <div className="search-box mx-auto my-auto w-full sm:w-full md:w-full lg:w-3/4 xl:w-3/4">
        <form className="flex flex-row" onSubmit={handleSubmit(onSubmit)}>
          <input
            className={`w-full  py-2  border-l border-t border-b border-gray-700 rounded-l  font-bold   px-2 outline-none text-lg text-gray-600  ${errors.description} ? "border-red-500" : ""`}
            type="text"
            id="commentBox"
            {...register("description", { required: true })}
            placeholder="Comment Title"
          />
          {errors.description && (
            <span className="text-red-500 text-sm">This field is required</span>
          )}
          <span className="flex items-center bg-blue-500 rounded rounded-l-none border-0 px-3 font-bold text-grey-100">
            <button
              id="addCommentBtn"
              className="bg-blue-500 hover:bg-gredient-light text-lg text-white font-bold py-3 px-6 rounded"
            >
              Add
            </button>
          </span>
        </form>
      </div>
      <CommentListItem />
    </div>
  );
};
export default CommentForm;
