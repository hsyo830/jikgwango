import Logo from "../common/Logo";
import SearchBar from "../common/SearchBar";
import ThemeToggle from "../common/ThemeToggle";

// 검색창 헤더
const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-30 grid w-full grid-cols-[auto_auto] items-start justify-between gap-y-3 px-4 pt-5 md:grid-cols-[auto_minmax(0,560px)_minmax(0,1fr)_auto] md:items-center md:gap-x-4 md:gap-y-0 lg:px-5">
      <div className="col-start-1 row-start-1 shrink-0 lg:hidden">
        <Logo mobileHeader />
      </div>
      <div className="col-span-2 row-start-2 w-full min-w-0 md:col-span-1 md:col-start-2 md:row-start-1">
        <SearchBar />
      </div>
      <div className="col-start-2 row-start-1 inline-flex shrink-0 gap-1 justify-self-end md:col-start-4 md:row-start-1">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
