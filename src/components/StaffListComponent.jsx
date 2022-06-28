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
        <div className=" p-4 mt-4 border rounded-md bg-gradient-to-br from-purple-600 border-t-violet-400 hover:from-slate-200 hover:to-slate-700 hover:text-center hover:text-lg ">
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
  const resString = `grid grid-cols-1 sm:grid-cols-${screen.sm} md:grid-cols-${screen.md}`;
  console.log(resString);
  const StaffList = function () {
    return (
      <div className={resString}>
        {STAFFS.map((item, key) => (
          <div
            className="hover:origin-bottom hover:-rotate-3 border rounded-md bg-zinc-500 capitalize p-2 cursor-pointer hover:bg-emerald-400 delay-75"
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
      <h1 className=" bg-gradient-to-r from-blue-800 to-lime-400 p-4 px-4 text-white text-lg animate-pulse">
        Ứng dụng quản lý nhân sự v1.9
      </h1>
      <div className="p-4 text-rose-700 justify-center flex flex-row items-center">
        <label
          className="cursor-pointer flex flex-row items-center"
          htmlFor="setcol"
        >
          <span className="text-4xl pr-4">&#9881;</span>
          <span>Tùy chỉnh số cột:</span>
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
          placeholder="number?"
          className="text-center w-20 bg-zinc-700 text-red rounded-lg ml-4"
        />
      </div>
      <div className="p-4">
        <StaffList />
        {!currentStaff && (
          <div className="pt-4 text-pink-500">
            Bấm vào tên nhân viên để xem thông tin
          </div>
        )}
        <RenderStaff />
      </div>
    </div>
  );
};

export default StaffListComponent;
