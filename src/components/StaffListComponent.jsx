import React from "react";
import { Link } from "react-router-dom";

const StaffListComponent = ({ screen, staffs }) => {
    const resString = `grid gap-4 grid-cols-2 sm:grid-cols-${screen.sm} md:grid-cols-${screen.md}`;

    return (
        <div className=" bg-cyan-50">
            <nav className="bg-gray-100 px-5 mb-2 py-3 mx-6 text-lg">
                <ol className="flex">
                    <li>
                        <Link
                            to="/staffs"
                            className="text-blue-600 hover:text-blue-700"
                        >
                            Nhân viên
                        </Link>
                    </li>
                </ol>
            </nav>
            <div className=" mx-6">
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
    );
};

export default StaffListComponent;
