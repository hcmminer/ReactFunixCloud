import { combineReducers, configureStore } from "@reduxjs/toolkit";
import staffsReducer from "./staffsPageRedux";
import departmentsReducer from "./departmentsPageRedux";

const rootReducer = combineReducers({
    staffs: staffsReducer,
    departments: departmentsReducer,
});

export default configureStore({
    reducer: rootReducer,
});
