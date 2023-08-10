import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import SearchBar from "../SearchBar/SearchBar";
import UserCard from "../UserCard/UserCard";
import Styles from "./content.module.scss";
import classNames from "classnames/bind";
import { fetchUsers } from "../../store/actions/fetchUsers";
import { useSelector } from "react-redux";

const cx = classNames.bind(Styles);

const Content = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");

  useEffect(() => {
    dispatch(fetchUsers("d"));
  }, []);

  return (
    <div className={cx("content", "content__container")}>
      <SearchBar searchUsers={setQuery} />
      Query: {query}
      <UserCard />
    </div>
  );
};

export default Content;
