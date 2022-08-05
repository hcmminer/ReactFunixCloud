import { configureStore } from "@reduxjs/toolkit";
import staffsReducer from "./staffsRedux";

const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

export default configureStore({
    reducer: {
        staffs: staffsReducer,
    },
});
