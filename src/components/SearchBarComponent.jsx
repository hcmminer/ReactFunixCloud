import React from "react";
import { useState } from "react";

const SearchBarComponent = ({
    setSearchStaffs,
    currentSearchInput,
    setSearchCurrentInput,
}) => {
    // use uncontrolled form
    const input = React.createRef();
    return (
        <div className="hidden sm:flex">
            <form method="GET">
                <div className="relative text-gray-600">
                    <input
                        type="search"
                        name="q"
                        className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none "
                        placeholder="Search..."
                        autoComplete="off"
                        onChange={(e) => {
                            // search by controlled form and uncontrolled
                            // setSearchStaffs(e.target.value);
                            // setSearchStaffs(e.currentTarget.value);
                            setSearchStaffs(input.current.value);
                            setSearchCurrentInput(input.current.value);
                            // setSearchCurrentInput(e.target.value);
                        }}
                        ref={input}
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
