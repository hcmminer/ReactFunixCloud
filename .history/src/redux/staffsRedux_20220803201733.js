import { createSlice } from "@reduxjs/toolkit";
import { STAFFS } from "../staffs";
const calSalary = (item) => {
    let total = item.salaryScale * 3000000 + item.overTime * 200000;
    return total;
};
export const staffsSlice = createSlice({
    name: "staffs",
    initialState: { value: STAFFS },
    reducers: {
        staffNew: (state, action) => {
            state.value.push(action.payload);
        },
        staffs: (state, action) => {
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
        setSortedStaffs: (state, action) => {
            console.log(action);
            if (action.payload == "idDec") {
                state.value.sort((a, b) => b.id - a.id);
            } else if (action.payload == "salaryDec") {
                state.value.sort((a, b) => calSalary(b) - calSalary(a));
            } else if (action.payload == "default") {
                state.value.sort((a, b) => -b.id + a.id);
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { addNewStaff, setSearchedStaffs, setSortedStaffs } =
    staffsSlice.actions;

export default staffsSlice.reducer;
