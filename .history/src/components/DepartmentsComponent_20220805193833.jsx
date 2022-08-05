import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DepartmentCard = ({ item }) => {
    return (
        <Link to={`departments/${item.id}`}>
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
    departments = useSelector(state => state.departments.)
    return (
        <div>
            <nav className="bg-gray-100 px-5 py-3 text-lg mx-6">
                <ol className="flex">
                    <li>
                        <Link
                            to="/staffs"
                            className="text-blue-600 hover:text-blue-700"
                        >
                            Nhân viên
                        </Link>
                    </li>
                    <li>
                        <span className="text-gray-500 mx-2">/</span>
                    </li>
                    <li className="text-gray-500">Phòng Ban</li>
                </ol>
            </nav>
            <div className="mx-6 mt-2 grid gap-4 grid-col-1 sm:grid-col-2 md:grid-cols-3">
                {DEPARTMENTS.map((item, key) => {
                    return <DepartmentCard item={item} key={key} />;
                })}
            </div>
        </div>
    );
};

export default DepartmentsComponent;
