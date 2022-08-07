import { combineReducers, configureStore } from "@reduxjs/toolkit";
import staffsReducer from "./staffsPageRedux";
import salariesPageReducer from "./salariesPageRedux";
import departmentsPageReducer from "./departmentsPageRedux";

const rootReducer = combineReducers({
    staffs: staffsReducer,
    salaries: salariesPageReducer,
    departments: departmentsPageReducer,
});

export default configureStore({
    reducer: rootReducer,
});
