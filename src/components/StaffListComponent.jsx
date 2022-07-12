import { STAFFS } from "../staffs";
import React from "react";
import { Link } from "react-router-dom";

const StaffListComponent = ({ screen }) => {
    const resString = `grid gap-2 grid-cols-2 sm:grid-cols-${screen.sm} md:grid-cols-${screen.md}`;
    const StaffList = function () {
        return (
            <div className={resString}>
                {STAFFS.map((item, key) => (
                    <div
                        className="border border-purple-600 rounded-md bg-zinc-500 capitalize p-2 cursor-pointer hover:bg-green-400 shadow-lg hover:text-white transform -skew-x-12 hover:skew-x-0 hover:z-40 hover:scale-110"
                        key={key}
                    >
                        <Link to={`/staffs/${item.id}`}>
                            <img
                                className="mx-auto "
                                src={"./src" + item.image}
                                alt={item.name}
                            />
                        </Link>
                        <div className="text-center">{item.name}</div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <div className=" bg-cyan-50">
            <div className="m-1 mx-4">
                <h1 className="text-2xl text-center">Nhân Viên</h1>
                <hr className="border-t-2 border-purple-600 my-4" />
                <StaffList />
                <div className="pt-4 text-pink-500 italic text-lg">
                    Bấm vào tên nhân viên để xem thông tin
                </div>
            </div>
        </div>
    );
};

export default StaffListComponent;
