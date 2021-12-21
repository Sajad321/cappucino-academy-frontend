import { combineReducers } from "redux";
import courses from "./courseReducers";
import instructors from "./instructorReducers";
import ambassdors from "./ambassdorReducers";
import users from "./userReducers";
import rewards from "./rewardReducers";
import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  instructors,
  ambassdors,
  users,
  rewards,
  apiCallsInProgress,
});

export default rootReducer;
