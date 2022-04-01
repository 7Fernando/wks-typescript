import { combineReducers } from "redux";
import { usersReducer } from "../reducers/user";
import { User } from "../actions/index";

// interface stateI{
//     counter: number,
// }

// const initialState:stateI = {
//     counter: 1,
// };

// interface actionI {
//     type: string,
// }
export interface StoreState {
  users: User[];
}

export const reducers = combineReducers<StoreState>({
  users: usersReducer,
  
});
