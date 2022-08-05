import { combineReducers, configureStore } from "@reduxjs/toolkit";
import staffsPageReducer from "./staffsPageRedux";
import salariesPageRedux from "./salariesPageRedux";

const rootReducer = combineReducers({ staffs: staffsReducer, });

export default configureStore({
    reducer: rootReducer,
});
