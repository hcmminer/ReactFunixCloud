import { configureStore } from "@reduxjs/toolkit";
import staffsReducer from "./staffsRedux";

const rootReducer = combineReducer({ staffs: staffsReducer });

export default configureStore({
    reducer: rootReducer,
});
