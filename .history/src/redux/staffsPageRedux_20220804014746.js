import { createSlice } from "@reduxjs/toolkit";

export const staffsPageSlice = createSlice({
    name: "StaffsPage",
    initialState: { staffs: [] },
    reducers: {
        staff
        staffNew: (state, action) => {
            state.value.push(action.payload);
        },
        staffsSearched: (state, action) => {
            if (action.payload == "") {
                state.value = STAFFS;
            } else {
                const newState = state.value.filter((item) =>
                    item.name
                        .toLowerCase()
                        .includes(action.payload.toLowerCase())
                );
                state.value = newState;
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { staffNew, staffsSearched } = staffsPageSlice.actions;

export default staffsPageSlice.reducer;
