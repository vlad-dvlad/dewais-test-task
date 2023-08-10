import { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import SearchBar from "../SearchBar/SearchBar";
import UserCard from "../UserCard/UserCard";
import Styles from "./content.module.scss";
import classNames from "classnames/bind";
import { fetchUsers } from "../../store/actions/fetchUsers";

const cx = classNames.bind(Styles);

const Content = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers("d"));
  }, []);

  return (
    <div className={cx("content", "content__container")}>
      <SearchBar />
      <UserCard />
    </div>
  );
};

export default Content;
