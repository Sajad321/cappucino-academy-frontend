import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function (state = initialState.rewards, action) {
  switch (action.type) {
    case types.LOAD_REWARDS_SUCCESS:
      return action.rewards;
    default:
      return state;
  }
}
