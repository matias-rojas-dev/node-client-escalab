import { combineReducers } from "redux";
import { headerReducer } from "./headerReducer";
import { userReducer } from "./userReducer";
import { searchReducer } from "./searchReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
    headerReducer,
    userReducer,
    searchReducer,
    cartReducer
});

export default rootReducer;