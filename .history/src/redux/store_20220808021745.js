import { combineReducers, configureStore } from "@reduxjs/toolkit";
import staffsReducer from "./staffsRedux";
import departmentsReducer from "./departmentsRedux";
import logger from "redux-logger";
const rootReducer = combineReducers({
    staffs: staffsReducer,
    departments: departmentsReducer,
});

export default configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
