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

    // search staffs
    const [staffs, setStaffs] = useState(STAFFS);
    const changeStaffs = (e) => {
        setStaffs(STAFFS.filter((item) => item.name.includes(e)));
    };

    // sort salaries by (id | salary total)
    const [sortStaffs, setSortStaffs] = useState(STAFFS);
    const calSalary = (item) => {
        let total = item.salaryScale * 3000000 + item.overTime * 200000;
        return total;
    };
    const sortBy = (e) => {
        if (e == "id-inc") {
            console.log(e);
            setSortStaffs(STAFFS.sort((a, b) => b.id - a.id));
        } else if (e == "salary-dec") {
            console.log(e);
            setSortStaffs(STAFFS.sort((a, b) => calSalary(b) - calSalary(a)));
        }
    };

    return (
        <BrowserRouter>
            <HeaderComponent
                screen={screen}
                setScreen={(a) => setScreen({ ...screen, sm: a, md: a })}
                setStaffs={(e) => changeStaffs(e)}
                setSortStaffs={(e) => sortBy(e)}
            />
            <Routes>
                <Route
                    path="staffs"
                    element={
                        <StaffListComponent screen={screen} staffs={staffs} />
                    }
                ></Route>
                <Route
                    path="staffs/:staffId"
                    element={<CurrentStaffComponent />}
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
