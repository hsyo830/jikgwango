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
      setErrorMessage(`'${keyword}' 검색 결과가 없습니다. 팀명, 구장명으로 검색해보세요.`);
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
        role="search"
        aria-label="구장 검색"
        className="border-input-border bg-input h-9 w-full rounded-[7px] border md:h-10 lg:h-11"
      >
        <div className="flex h-full min-w-0 items-center gap-2.5 px-2.5">
          <label htmlFor="stadium-search" className="sr-only">
            구장 검색
          </label>
          <SearchIcon aria-hidden="true" className="text-placeholder h-4 w-4 shrink-0" />
          <input
            id="stadium-search"
            type="search"
            placeholder="팀 이름으로 구장을 찾아보세요."
            className="text-foreground placeholder:text-placeholder min-w-0 flex-1 bg-transparent text-sm outline-none focus:outline-none md:text-base"
            value={keyword}
            onChange={handleChangeKeyword}
          />
          <button type="submit" className="sr-only" aria-label="검색">
            검색
          </button>
        </div>
      </form>

      {errorMessage && (
        <p
          role="alert"
          className="text-error text-danger animate-error-shake-in absolute top-full left-0 mt-1 text-xs font-bold"
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default SearchBar;
