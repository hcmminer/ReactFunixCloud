import { createSlice } from "@reduxjs/toolkit";

export const departmentsPageSlice = createSlice({
    name: "departments",
    initialState: {
        departments: [{ id: "Dept05", name: "Finance", numberOfStaff: 9 }],
    },
    reducers: {
        departmentsGeted: (state, action) => {
            console.log("ok");
            state.departments = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { departmentsGeted } = departmentsPageSlice.actions;

export default departmentsPageSlice.reducer;
