import { combineReducers } from "redux";
import userReducer from "../modules/login/reducer";

const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;