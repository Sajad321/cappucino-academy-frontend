import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function (state = initialState.instructors, action) {
  switch (action.type) {
    case types.LOAD_INSTRUCTORS_SUCCESS:
      return action.instructors;
    default:
      return state;
  }
}
