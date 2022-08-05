import { combineReducers, configureStore } from "@reduxjs/toolkit";
import staffsPageReducer from "./staffsPageRedux";
import salariesPageRedux from "./salariesPageRedux";

const rootReducer = combineReducers({ staffs: staffsPageReducer, staf  });

export default configureStore({
    reducer: rootReducer,
});
