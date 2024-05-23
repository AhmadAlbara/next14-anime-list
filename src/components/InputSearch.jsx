"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import { IoSearch } from "react-icons/io5";

const InputSearch = ({ placeholder }) => {
  const inputRef = useRef(null);
  const router = useRouter();

  const handleSearch = () => {
    if (inputRef.current) {
      const keyword = inputRef.current.value;
      if (!keyword || keyword.trim() == "") return;
      router.push(`/search/${keyword}`);
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative z-20">
      <input
        type="text"
        ref={inputRef}
        placeholder={placeholder}
        onKeyPress={handleKeyPress}
        className="px-3 py-1 text-center bg-transparent rounded-full text-color-secondary dark:text-color-primary outline dark:outline-color-primary outline-color-secondary outline-1 dark:placeholder-color-primary placeholder-color-secondary"
      />
      <button className="absolute top-2 end-4" onClick={handleSearch}>
        <IoSearch className="text-lg" />
      </button>
    </div>
  );
};

export default InputSearch;
