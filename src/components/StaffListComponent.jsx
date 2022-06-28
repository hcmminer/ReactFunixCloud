import { STAFFS } from "../staffs";
import dateFormat from "dateformat";
import React, { useState } from "react";

const StaffListComponent = () => {
  const [currentStaff, setCurrentStaff] = useState(null);
  const [screen, setScreen] = useState({
    sm: 2,
    md: 3,
  });
  console.log(screen);
  const RenderStaff = function () {
    if (currentStaff != null) {
      return (
        <div className="transform hover:scale-110 p-4 mt-4 border rounded-md bg-gradient-to-br from-purple-300 text-gray-900 hover:text-red-600 text-center">
          <h1 className="text-lg font-bold">
            Họ và tên: <span className="capitalize">{currentStaff.name}</span>
          </h1>
          <div className="">
            Ngày sinh: {dateFormat(currentStaff.doB, "dd/mm/yyyy")}
          </div>
          <div className="">
            Ngày vào công ty: {dateFormat(currentStaff.startDate, "dd/mm/yyyy")}
          </div>
          <div>Phòng ban: {currentStaff.department.name}</div>
          <div>Số ngày nghỉ còn lại: {currentStaff.annualLeave}</div>
          <div>Số ngày đã làm thêm: {currentStaff.overTime}</div>
        </div>
      );
    }
  };
  const resString = `grid gap-2 grid-cols-1 sm:grid-cols-${screen.sm} md:grid-cols-${screen.md}`;
  console.log(resString);
  const StaffList = function () {
    return (
      <div className={resString}>
        {STAFFS.map((item, key) => (
          <div
            className="border border-purple-600 rounded-md bg-zinc-500 capitalize p-2 cursor-pointer hover:bg-green-400 shadow-lg hover:text-white transform  hover:-skew-x-12"
            key={key}
            onClick={() => setCurrentStaff(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className=" bg-cyan-50">
      <h1 className=" bg-gradient-to-tr from-green-700 to-lime-400 p-4 px-4 text-yellow-50 text-center text-xl animate-pulse  hover:bg-red-600">
        Ứng dụng quản lý nhân sự v1.0
      </h1>
      <div className="p-1 text-rose-700 justify-center flex flex-row items-center">
        <label
          className="cursor-pointer flex flex-row items-center text-pink-400"
          htmlFor="setcol"
        >
          <span className="text-xl animate-spin -mr-2 mt-4">&#9881;</span>
        </label>
        <input
          onChange={(e) =>
            e.target.value != "" &&
            setScreen({
              ...screen,
              sm: e.target.value,
              md: e.target.value,
            })
          }
          type="number"
          id="setcol"
          placeholder="1...12"
          className=" animate-bounce text-center border-2 border-red-500 rounded-full text-red-600  w-20 placeholder-gray-600"
        />
        <label
          className="cursor-pointer flex flex-row items-center text-pink-400"
          htmlFor="setcol"
        >
          <span className="text-xl animate-spin -ml-2 mt-4">&#9881;</span>
        </label>
      </div>
      <div className="m-1 mx-4">
        <StaffList />
        {!currentStaff && (
          <div className="pt-4 text-pink-500 italic text-lg">
            Bấm vào tên nhân viên để xem thông tin
          </div>
        )}
        <RenderStaff />
      </div>
    </div>
  );
};

export default StaffListComponent;
