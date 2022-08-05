import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";

const CurrentDepartment = () => {
    const departments = useSelector((state) => state.departments.departments);
    const { departmentId } = useParams();
    const CurrentDepartment = departments.filter((item) => item.name)
    return (
        <>
            <nav className="bg-gray-100 px-5 py-3 mx-6 text-lg">
                <ol className="flex">
                    <li>
                        <Link
                            to="/departments"
                            className="text-blue-600 hover:text-blue-700"
                        >
                            Phòng ban
                        </Link>
                    </li>
                    <li>
                        <span className="text-gray-500 mx-2">/</span>
                    </li>
                    <li className="text-gray-500">{departmentId}</li>
                </ol>
            </nav>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 bg-gradient-to-br from-purple-300 mx-6 ">
                ok
            </div>
        </>
    );
};

export default CurrentDepartment;
