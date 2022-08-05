import React from "react";
import { useDispatch } from "react-redux";
import { staffsSearched } from "../redux/staffsPageRedux";
import { publicRequest } from "../requestMethods";

const SearchBarComponent = ({ currentSearchInput, setCurrentSearchInput }) => {
    const dispatch = useDispatch();
    let data;
    useEffect(() => {
        const getStaffs = async () => {
            try {
                const res = await publicRequest.get("staffs");
                const data = res.data
            } catch (err) { }
        };
        getStaffs();
    }, []);
    return (
        <div className="hidden sm:flex">
            <form method="GET">
                <div className="relative text-gray-600">
                    <input
                        type="search"
                        className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none "
                        placeholder="Search..."
                        autoComplete="off"
                        onChange={(e) => {
                            dispatch(staffsSearched(e.target.value));
                            setCurrentSearchInput(e.target.value);
                        }}
                        value={currentSearchInput}
                        autoFocus
                    />
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <button type="submit" className="p-1">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                className="w-6 h-6"
                            >
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default SearchBarComponent;
