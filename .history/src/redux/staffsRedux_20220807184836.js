import { createSlice } from "@reduxjs/toolkit";

export const staffsSlice = createSlice({
    name: "staffs",
    initialState: {
        staffs: [
            // {
            //     id: 0,
            //     name: "INNIT USER",
            //     doB: "1999-01-01T08:59:00.000Z",
            //     salaryScale: 1.1,
            //     startDate: "2019-04-30T08:59:00.000Z",
            //     departmentId: "Dept01",
            //     annualLeave: 1,
            //     overTime: 1,
            //     image: "/assets/images/alberto.png",
            //     salary: 3500000,
            // },
        ],
    },
    reducers: {
        staffsGeted: (state, action) => {
            state.staffs = action.payload;
        },

        staffsSearched: (state, action) => {
            if (action.payload != "") {
                state.staffs = state.staffs.filter((item) =>
                    item.name
                        .toLowerCase()
                        .includes(action.payload.toLowerCase())
                );
            }
            return state;
        },
        staffsSorted: (state, action) => {
            if (action.payload == "idDec") {
                state.value.sort((a, b) => b.id - a.id);
            } else if (action.payload == "salaryDec") {
                state.value.sort((a, b) => calSalary(b) - calSalary(a));
            } else if (action.payload == "default") {
                state.value.sort((a, b) => -b.id + a.id);
            }
        },
        staffNew: (state, action) => {
            state.staffs.push(action.payload);
        },
    },
});

// Action creators are generated for each case reducer function
export const { staffsGeted, staffNew,staffsSorted staffsSearched } = staffsSlice.actions;

export default staffsSlice.reducer;
