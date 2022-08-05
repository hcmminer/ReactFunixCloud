import { combineReducers, configureStore } from "@reduxjs/toolkit";
import staffsReducer from "./staffsPageRedux";
import s

const rootReducer = combineReducers({ staffs: staffsReducer });

export default configureStore({
    reducer: rootReducer,
});
