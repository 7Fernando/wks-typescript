import { User, FetchUsersAction, DeleteUsersAction } from "../actions/index";
import { ActionTypes } from "../actions/types";

export const usersReducer = (state: User[] = [], action: FetchUsersAction | DeleteUsersAction ) => {
  switch (action.type) {
    case ActionTypes.fetchUsers:
      return action.payload;
    case ActionTypes.deleteUser:
     const usersBackUp = state
     const usersFiltered = usersBackUp.filter((user) => user.id !== action.payload)
     return usersFiltered //Como estado tengo un array de objs, eso mismo devuelvo
    default:
      return state;
  }
};
