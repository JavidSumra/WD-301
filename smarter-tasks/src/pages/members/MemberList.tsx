import React, { useEffect } from "react";
import { fetchMembers } from "../../context/members/actions";
import { useMembersDispatch } from "../../context/members/context";
import MembersListItem from "./MemberListItems";

const MemberList: React.FC = () => {
  const dispactchMembers = useMembersDispatch();
  useEffect(() => {
    fetchMembers(dispactchMembers);
  }, []);
  return (
    <div className="grid gap-4 grid-cols-4 mt-5">
      <MembersListItem />
    </div>
  );
};
export default MemberList;
