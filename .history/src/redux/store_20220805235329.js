import { combineReducers, configureStore } from "@reduxjs/toolkit";
import staffsReducer from "./staffsRedux";
import departmentsReducer from "./departmentsPageRedux";

const rootReducer = combineReducers({
    staffs: staffsReducer,
    departments: departmentsReducer,
});

export default configureStore({
    reducer: rootReducer,
});
