import React from "react";
import {
  useMembersState,
  useMembersDispatch,
} from "../../context/members/context";
import { deleteMember } from "../../context/members/actions";
import { TrashIcon } from "@heroicons/react/24/outline";
export default function MembersListItem() {
  const dispatchMembers = useMembersDispatch();
  let state: any = useMembersState();
  const { members, isLoading, isError, errorMessage } = state;
  if (members.length === 0 && isLoading) {
    return <span>Loading...</span>;
  }
  if (isError) {
    return <span>{errorMessage}</span>;
  }
  const handleDelete = async (id: number) => {
    const response = await deleteMember(dispatchMembers, { id });
    if (response.ok) {
      window.location.reload();
    } else {
      console.log(response.error);
    }
  };
  return (
    <>
      {members.map((member: any) => (
        <div
          key={member.id}
          className="member flex flex-col flex-wrap p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <div className="flex items-center justify-end">
            <TrashIcon
              className="h-6 w-6 hover:text-red-500 duration-75"
              aria-hidden="true"
              onClick={() => handleDelete(member.id)}
            ></TrashIcon>
          </div>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white ">
            Name:{member.name}
          </h5>
          <h5 className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white ">
            Email Id:{member.email}
          </h5>
        </div>
      ))}
    </>
  );
}
