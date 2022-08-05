import { configureStore } from "@reduxjs/toolkit";
import staffsReducer from "./staffsRedux";

export default configureStore({
    reducer: {
        staffs: staffsReducer,
    },
});
