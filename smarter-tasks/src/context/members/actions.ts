import { API_ENDPOINT } from "../../config/constants";

export const addMember = async (dispatch: any, args: any) => {
  try {
    const token = localStorage.getItem("authToken") ?? "";
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(args),
    });
    if (!response.ok) {
      throw new Error("Failed to Create Member");
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message };
    }
    dispatch({ type: "ADD_MEMBER_SUCCESS", payload: data.user });
    return { ok: true };
  } catch (error) {
    console.log(`Operation Failed: ${error}`);
    return { ok: false, error };
  }
};

export const fetchMembers = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";
  console.log(dispatch);
  try {
    dispatch({ type: "FETCH_MEMBERS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    console.log(data);
    dispatch({ type: "FETCH_MEMBERS_SUCCESS", payload: data });
  } catch (error) {
    console.log(`Error while Fetching Members:${error}`);
    dispatch({ type: "FETCH_MEMBERS_FAILURE", payload: "Unable to Load Data" });
  }
};

export const deleteMember = async (dispatch: any, args: any) => {
  let token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: "DELETE_MEMBER_START" });
    const response = await fetch(`${API_ENDPOINT}/users/${args.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to Create Member");
    }
    dispatch({ type: "DELETE_MEMBER_END" });
    return { ok: true };
  } catch (error) {
    console.log(`Failed to Delete user With id : ${args.id}\nError:${error}`);
    dispatch({ type: "DELETE_MEMBER_ERROR", payload: error });
    return { ok: false, error };
  }
};
