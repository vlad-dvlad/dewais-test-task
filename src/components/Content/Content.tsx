import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import SearchBar from "../SearchBar/SearchBar";
import UserCard from "../UserCard/UserCard";
import Styles from "./content.module.scss";
import classNames from "classnames/bind";
import { fetchUsers } from "../../store/actions/fetchUsers";
import { useSelector } from "react-redux";
import { getUsers } from "../../store/selectors/userSelectors";

const cx = classNames.bind(Styles);

const Content = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useState("");
  const { users, loading, error } = useSelector(getUsers);

  useEffect(() => {
    if (!query) return;
    dispatch(fetchUsers(query));
  }, [query]);

  return (
    <div className={cx("content", "content__container")}>
      <SearchBar searchUsers={setQuery} />
      Query: {query}
      {users?.map((user) => (
        <div key={user.userId}>{user.login}</div>
      ))}
      <UserCard />
    </div>
  );
};

export default Content;
