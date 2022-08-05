import { configureStore } from "@reduxjs/toolkit";
import staffsReducer from "./staffsSlice";

export default configureStore({
    reducer: {
        staffs: staffsReducer,
    },
});
