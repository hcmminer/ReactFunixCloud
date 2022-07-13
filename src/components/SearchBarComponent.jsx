const SearchBarComponent = () => {
    return (
        <div className="flex">
            <form method="GET">
                <div className="relative text-gray-600">
                    <input
                        type="search"
                        name="q"
                        className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-white focus:text-black"
                        placeholder="Search..."
                        autoComplete="off"
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
