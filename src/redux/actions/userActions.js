import * as types from "./actionTypes";
import * as userAPI from "../../api/userApi";
import { beginApiCall, apiCallError } from "./apiStatusActions";

export function loadUsersSuccess(users) {
  return { type: types.LOAD_USERS_SUCCESS, users };
}

export function loadUsers() {
  return function (dispatch) {
    dispatch(beginApiCall());
    return userAPI
      .getUsers()
      .then((users) => {
        dispatch(loadUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
