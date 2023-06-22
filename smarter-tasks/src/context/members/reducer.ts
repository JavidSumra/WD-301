interface Member {
  id: number;
  name: string;
  email: string;
  password: string;
}
export interface MemberState {
  members: Member[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}
export const initialState: MemberState = {
  members: [],
  isLoading: false,
  isError: false,
  errorMessage: "",
};

export type MembersActions =
  | { type: "FETCH_MEMBERS_REQUEST" }
  | { type: "FETCH_MEMBERS_SUCCESS"; payload: Member[] }
  | { type: "FETCH_MEMBERS_FAILURE"; payload: string }
  | { type: "ADD_MEMBER_SUCCESS"; payload: Member }
  | { type: "DELETE_MEMBER_ERROR"; payload: string }
  | { type: "DELETE_MEMBER_END" }
  | { type: "DELETE_MEMBER_START" };

export const reducer = (
  state: MemberState = initialState,
  action: MembersActions
): MemberState => {
  switch (action.type) {
    case "FETCH_MEMBERS_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "FETCH_MEMBERS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        members: action.payload,
      };
    case "FETCH_MEMBERS_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: action.payload,
      };
    case "ADD_MEMBER_SUCCESS":
      return {
        ...state,
        members: [...state.members, action.payload],
      };
    case "DELETE_MEMBER_START":
      return {
        ...state,
        isLoading: true,
      };
    case "DELETE_MEMBER_END":
      return {
        ...state,
        isLoading: false,
      };
    case "DELETE_MEMBER_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
        errorMessage: "Unable to Delete",
      };
    default:
      return state;
  }
};
