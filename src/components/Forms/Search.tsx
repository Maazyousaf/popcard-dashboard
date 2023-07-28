import clsx from "clsx";
import React from "react";
import SearchIcon from "../Icons/SearchIcon";

interface IProps {
  className?: string;
}

const Search = ({ className }: IProps) => {
  return (
    <form>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon />
        </div>
        <input
          type="search"
          id="default-search"
          className={clsx(
            className,
            "focus:shadow-outline focus:outline-none focus:ring-0 block w-full text-xs font-semibold rounded-md border border-borderColor px-3 pl-10 py-2 text-secondary outline-none placeholder:text-secondary focus:border-yellow disabled:cursor-not-allowed disabled:bg-[#e9ecef] ring-0"
          )}
          placeholder="Search"
          required
        />
      </div>
    </form>
  );
};

export default Search;
