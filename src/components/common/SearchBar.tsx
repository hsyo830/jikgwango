"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { stadiums } from "@/src/data/stadiums";

import SearchIcon from "../icons/SearchIcon";

const SearchBar = () => {
  const [keyword, setKeyword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleChangeKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    setErrorMessage("");
  };

  const handleSearchKeyword = () => {
    const trimmedKeyword = keyword.trim();

    if (!trimmedKeyword) return;

    const matched = stadiums.find((stadium) => stadium.searchKeywords.includes(trimmedKeyword));

    if (!matched) {
      setErrorMessage(`${keyword}에 대한 검색 결과가 없습니다.`);
      return;
    }

    router.push(`/stadiums?stadium=${matched.id}`);
  };

  return (
    <div className="relative">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchKeyword();
        }}
        className="border-input-border bg-input h-9 w-full rounded-[7px] border md:h-10 lg:h-11"
      >
        <div className="flex h-full min-w-0 items-center gap-2.5 px-2.5">
          <SearchIcon className="text-placeholder h-4 w-4 shrink-0" />
          <input
            type="search"
            placeholder="원하는 팀의 정보를 검색해보세요."
            className="text-foreground placeholder:text-placeholder min-w-0 flex-1 bg-transparent text-sm outline-none focus:outline-none md:text-base"
            value={keyword}
            onChange={handleChangeKeyword}
          />
        </div>
      </form>

      {errorMessage && (
        <p className="text-error text-danger animate-error-shake-in absolute top-full left-0 mt-1 text-xs font-bold">
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default SearchBar;
