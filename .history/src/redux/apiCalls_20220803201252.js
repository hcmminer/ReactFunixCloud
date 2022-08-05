import { addNewStaff, setSearchedStaffs, setSortedStaffs } from "./staffsRedux";
import { publicRequest } from "../requestMethods";

// export const login = async (dispatch, user) => {
//     dispatch(loginStart());
//     try {
//         const res = await publicRequest.post("/auth/login", user);
//         dispatch(loginSuccess(res.data));
//     } catch (err) {
//         dispatch(loginFailure());
//     }
// };
export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
};
