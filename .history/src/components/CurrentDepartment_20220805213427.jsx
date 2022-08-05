import React from "react";
import { useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";

const CurrentDepartment = () => {
    const departments = useSelector((state) => state.departments.departments);
    const { departmentId } = useParams();
    const CurrentDepartment = departments.filter(
        (item) => item.id === departmentId
    )[0];
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
                    <li className="text-gray-500">{CurrentDepartment.name}</li>
                </ol>
            </nav>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:grid-cols-4 bg-gradient-to-br from-purple-300 mx-6 ">
                <div className="mx-6">
                    <div className={resString}>
                        {staffs.map((item, key) => (
                            <div
                                className="capitalize cursor-pointer hover:bg-green-400 shadow-lg hover:text-white transform  hover:-skew-x-12 hover:z-40 hover:scale-110"
                                key={key}
                            >
                                <Link to={`/staffs/${item.id}`}>
                                    <img
                                        className="mx-auto "
                                        src={"../src" + item.image}
                                        alt={item.name}
                                    />
                                </Link>
                                <div className="text-center">{item.name}</div>
                            </div>
                        ))}
                    </div>
                    <div className="pt-4 text-pink-500 italic text-lg">
                        Bấm vào tên nhân viên để xem thông tin
                    </div>
                </div>
            </div>
        </>
    );
};

export default CurrentDepartment;
