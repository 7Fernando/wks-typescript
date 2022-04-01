import React, { useEffect } from "react";
import { connect } from "react-redux";
import { User, fetchUsers, deleteUser } from "../redux/actions/index";
import { StoreState } from "../redux/reducers/index";

interface AppProps {
  users: User[];
  fetchUsers(): any;
  deleteUser(id:number): any;
}

const App = (props: AppProps) => {
  useEffect(() => {
    props.fetchUsers();
  }, []);
  return (
    <div>
      <button onClick={props.fetchUsers}>FETCH USERS!</button>
      {props.users.map((user: User) => {
        return (
          <div key={user.id}>
            <h3>{user.id} </h3>
            <h2>{user.name}</h2>
            <h2>{user.lastName}</h2>
            <button
              onClick={() => {
                props.deleteUser(user.id);
              }}
            >
              Delete user!
            </button>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state: StoreState): { users: User[] } => {
  return {
    users: state.users,
  };
};

export default connect(mapStateToProps, { fetchUsers, deleteUser })(App);
