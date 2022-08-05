import React from "react";

const CurrentDepartment = () => {
    return <>
    <nav className="bg-gray-100 px-5 py-3 mx-6 text-lg">
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
            <li className="text-gray-500">{currentStaff.name}</li>
        </ol>
    </nav>
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 bg-gradient-to-br from-purple-300 mx-6 ">
        <div className="mx-auto sm:mx-0">
            <img
                className="h-full object-cover"
                src={"../src" + currentStaff.image}
                alt={currentStaff.name}
            />
        </div>
        <div className="mx-auto  text-gray-900 hover:text-red-600 p-4 text-xl">
         ok
        </div>
    </div>
</>
}

export default CurrentDepartment;
