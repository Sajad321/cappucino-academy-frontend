import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function (state = initialState.ambassdors, action) {
  switch (action.type) {
    case types.LOAD_AMBASSDORS_SUCCESS:
      return action.ambassdors;
    default:
      return state;
  }
}
