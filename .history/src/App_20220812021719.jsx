import HeaderComponent from "./components/HeaderComponent";
import StaffListComponent from "./components/StaffListComponent";
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import { useState } from "react";
import CurrentStaffComponent from "./components/CurrentStaffComponent";
import DepartmentsComponent from "./components/DepartmentsComponent";
import SalariesComponent from "./components/SalariesComponent";
import "./App.css";
import CurrentDepartment from "./components/CurrentDepartment";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function App() {
    const [screen, setScreen] = useState({
        sm: 3,
        md: 5,
    });
    const { path } = useLocation();
    return (
        <BrowserRouter>
            <HeaderComponent
                screen={screen}
                setScreen={(a) => setScreen({ ...screen, sm: a, md: a })}
            />

            <Routes>
                <Route
                    path="staffs"
                    element={
                        <CSSTransition
                            key={path}
                            classNames="page"
                            timeout={3000}
                        >
                            <StaffListComponent screen={screen} />
                        </CSSTransition>
                    }
                ></Route>

                <Route
                    path="staffs/:staffId"
                    element={<CurrentStaffComponent page="staffs" />}
                ></Route>
                <Route
                    path="departments/:departmentId/:staffId"
                    element={<CurrentStaffComponent page="department" />}
                ></Route>
                <Route
                    path="departments"
                    element={<DepartmentsComponent />}
                ></Route>
                <Route
                    path="departments/:departmentId"
                    element={<CurrentDepartment />}
                ></Route>
                <Route path="salaries" element={<SalariesComponent />}></Route>
                <Route
                    path="/"
                    element={<Navigate to="/staffs" replace={true} />}
                ></Route>
            </Routes>
            {/* </CSSTransition> */}
        </BrowserRouter>
    );
}
