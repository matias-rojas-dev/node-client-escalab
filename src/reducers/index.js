import { combineReducers } from "redux";
import { headerReducer } from "./headerReducer";
import { userReducer } from "./userReducer";
import { searchReducer } from "./searchReducer";
import { cartReducer } from "./cartReducer";

const rootReducer = combineReducers({
    header: headerReducer,
    user: userReducer,
    search: searchReducer,
    cart: cartReducer
});

export default rootReducer;