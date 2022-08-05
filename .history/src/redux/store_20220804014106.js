import { combineReducers, configureStore } from "@reduxjs/toolkit";
import staffsPageReducer from "./staffsPageRedux";
import salariesPageReducer from "./salariesPageRedux";

const rootReducer = combineReducers({
    staffs: staffsPageReducer,
    salaries: salariesPageRedux,
});

export default configureStore({
    reducer: rootReducer,
});
