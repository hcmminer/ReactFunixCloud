import { createSlice } from "@reduxjs/toolkit";

export const staffsPageSlice = createSlice({
    name: "StaffsPage",
    initialState: { staffs: [], departments: [] },
    reducers: {
        staffsGeted: (state, action) => {
            state.staffs = action.payload;
        },
        departmentsGeted: (state, action) => {
            state.departments = action.payload;
        },
        staffNew: (state, action) => {
            state.staffs.push(action.payload);
        },
        staffsSearched: (state, action) => {
            const newState = state.staffs.filter((item) =>
                item.name.toLowerCase().includes(action.payload.toLowerCase())
            );
            state.staffs = newState;
        },
    },
});

// Action creators are generated for each case reducer function
export const { staffsGeted, departmentsGeted, staffNew, staffsSearched } =
    staffsPageSlice.actions;

export default staffsPageSlice.reducer;
