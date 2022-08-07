import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { departmentsGeted } from "../redux/departmentsRedux";
import { publicRequest } from "../requestMethods";

const DepartmentCard = ({ item }) => {
    return (
        <Link to={`${item.id}`}>
            <div className="border rounded-lg bg-gray-300">
                <div className="text-lg text-black font-bold  pt-1 pl-2">
                    {item.name}
                </div>
                <div className="p-4">
                    Số lượng nhân viên: {item.numberOfStaff}
                </div>
            </div>
        </Link>
    );
};

const DepartmentsComponent = () => {
    const departments = useSelector((state) => state.departments.departments);
    const dispatch = useDispatch();
    useEffect(() => {
        const getDepartments = async () => {
            try {
                const res = await publicRequest.get("departments");
                dispatch(departmentsGeted(res.data));
            } catch (error) {}
        };
        const getStaffs = async () => {
            try {
                const res = await publicRequest.get("staffs");
                dispatch(staffsGeted(res.data));
            } catch (err) {
                console.log(err);
            }
        };
        getDepartments();
        getStaffs();
    }, []);
    return (
        <div>
            <nav className="bg-gray-100 px-5 py-3 text-lg mx-6">
                <ol className="flex">
                    <li>
                        <Link
                            to="/departments"
                            className="text-blue-600 hover:text-blue-700"
                        >
                            Phòng ban
                        </Link>
                    </li>
                </ol>
            </nav>
            <div className="mx-6 mt-2 grid gap-4 grid-col-1 sm:grid-col-2 md:grid-cols-3">
                {departments.map((item, key) => {
                    return <DepartmentCard item={item} key={key} />;
                })}
            </div>
        </div>
    );
};

export default DepartmentsComponent;
