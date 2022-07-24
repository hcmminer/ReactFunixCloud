import HeaderComponent from "./components/HeaderComponent";
import StaffListComponent from "./components/StaffListComponent";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";
import CurrentStaffComponent from "./components/CurrentStaffComponent";
import DepartmentsComponent from "./components/DepartmentsComponent";
import SalariesComponent from "./components/SalariesComponent";
import "./App.css";
import { STAFFS } from "./staffs";
import { useEffect } from "react";
export default function App() {
    const [screen, setScreen] = useState({
        sm: 3,
        md: 6,
    });
    const [staffs, setStaffs] = useState(STAFFS);
    const [sortStaffs, setSortStaffs] = useState(STAFFS);
    // search staffs
    const setSearchStaffs = (e) => {
        setStaffs(
            STAFFS.filter((item) =>
                item.name.toLowerCase().includes(e.toLowerCase())
            )
        );
    };

    // addNewStaff
    const addNewStaff = (e) => {
        staffs.push(e);
        setStaffs(staffs);
    };

    // sort salaries by (id || salary total)
    const calSalary = (item) => {
        let total = item.salaryScale * 3000000 + item.overTime * 200000;
        return total;
    };
    const cloneSTAFFS = [...STAFFS];
    const sortBy = (e) => {
        if (e == "idDec") {
            setSortStaffs(cloneSTAFFS.sort((a, b) => b.id - a.id));
        } else if (e == "salaryDec") {
            setSortStaffs(
                cloneSTAFFS.sort((a, b) => calSalary(b) - calSalary(a))
            );
        } else {
            setSortStaffs(STAFFS);
        }
    };

    return (
        <BrowserRouter>
            <HeaderComponent
                screen={screen}
                setScreen={(a) => setScreen({ ...screen, sm: a, md: a })}
                setSearchStaffs={(e) => setSearchStaffs(e)}
                setSortStaffs={(e) => sortBy(e)}
            />
            <Routes>
                <Route
                    path="staffs"
                    element={
                        <StaffListComponent
                            screen={screen}
                            staffs={staffs}
                            setStaffs={(e) => addNewStaff(e)}
                        />
                    }
                ></Route>
                <Route
                    path="staffs/:staffId"
                    element={<CurrentStaffComponent staffs={staffs} />}
                ></Route>
                <Route
                    path="departments"
                    element={<DepartmentsComponent />}
                ></Route>
                <Route
                    path="salaries"
                    element={<SalariesComponent sortStaffs={sortStaffs} />}
                ></Route>
                <Route
                    path="/"
                    element={<Navigate to="/staffs" replace={true} />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
}
