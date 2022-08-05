import { combineReducers, configureStore } from "@reduxjs/toolkit";
import staffsReducer from "./staffsPageRedux";
import 

const rootReducer = combineReducers({ staffs: staffsReducer });

export default configureStore({
    reducer: rootReducer,
});
