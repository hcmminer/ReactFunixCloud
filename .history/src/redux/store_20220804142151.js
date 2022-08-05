import { combineReducers, configureStore } from "@reduxjs/toolkit";
import staffsPageReducer from "./staffsPageRedux";
import salariesPageReducer from "./salariesPageRedux";
import departmentsPageReducer from "./departmentsPageRedux";

const rootReducer = combineReducers({
    staffs: staffsPageReducer,
    salaries: salariesPageReducer,
});

export default configureStore({
    reducer: rootReducer,
});
