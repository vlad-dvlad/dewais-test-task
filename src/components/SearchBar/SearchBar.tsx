import { FC, useRef } from "react";
import Styles from "./searchBar.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(Styles);

interface SearchBarProps {
  searchUsers: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ searchUsers }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const submitSearch = () => {
    console.log(inputRef.current?.value);
    const searchValue = inputRef.current?.value as string;
    searchUsers(searchValue);
  };

  return (
    <div className={cx("searchBar", "searchBar__container")}>
      <input
        ref={inputRef}
        placeholder="Search by name"
        className={cx("searchBar__input")}
      />
      <button
        type="button"
        onClick={submitSearch}
        className={cx("searchBar__button")}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
