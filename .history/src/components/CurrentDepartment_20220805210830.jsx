import React from "react";
import { Link } from "react-router-dom";

const CurrentDepartment = () => {
    return (
        <>
            <nav className="bg-gray-100 px-5 py-3 mx-6 text-lg">
                <ol className="flex">
                    <li>
                        <Link
                            to="/staffs"
                            className="text-blue-600 hover:text-blue-700"
                        >
                            Nhân viên
                        </Lin>
                    </li>
                    <li>
                        <span className="text-gray-500 mx-2">/</span>
                    </li>
                    <li className="text-gray-500">ok</li>
                </ol>
            </nav>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 bg-gradient-to-br from-purple-300 mx-6 ">
                ok
            </div>
        </>
    );
};

export default CurrentDepartment;
