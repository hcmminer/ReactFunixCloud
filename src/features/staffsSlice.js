import { createSlice } from "@reduxjs/toolkit";
import { STAFFS } from "../staffs";
const calSalary = (item) => {
    let total = item.salaryScale * 3000000 + item.overTime * 200000;
    return total;
};
export const staffsSlice = createSlice({
    name: "staffs",
    initialState: STAFFS,
    reducers: {
        addNewStaff: (state, action) => {
            state.push(action.payload);
        },
        setSearchedStaffs: (state, action) => {
            let newstate = state.filter((item) =>
                item.name.toLowerCase().includes(action.payload.toLowerCase())
            );
            state = newstate;
        },
        setSortedStaffs: (state, action) => {
            console.log(action);
            if (action.payload == "idDec") {
                state.sort((a, b) => b.id - a.id);
            } else if (action.payload == "salaryDec") {
                state.sort((a, b) => calSalary(b) - calSalary(a));
            } else if (action.payload == "default") {
                state.sort((a, b) => -b.id + a.id);
            }
        },
    },
});

// Action creators are generated for each case reducer function
export const { addNewStaff, setSearchedStaffs, setSortedStaffs } =
    staffsSlice.actions;

export default staffsSlice.reducer;
