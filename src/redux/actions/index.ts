import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";

const url = "http://localhost:3001/api/user";

export interface User {
  id: number;
  name: string;
  lastName: string;
}

export interface FetchUsersAction {
  type: ActionTypes.fetchUsers;
  payload: User[];
}

export interface DeleteUsersAction {
  type: ActionTypes.deleteUser;
  payload: Number,
}

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get<User[]>(url);
    dispatch<FetchUsersAction>({
      type: ActionTypes.fetchUsers,
      payload: response.data,
    });
  };
};

export const deleteUser = (id:number) => {
  return {
      type: ActionTypes.deleteUser,
      payload: id
    }
};
