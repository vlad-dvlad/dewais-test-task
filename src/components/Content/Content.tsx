import { useEffect, useState } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import SearchBar from "../SearchBar/SearchBar";
import UserCard from "../UserCard/UserCard";
import Styles from "./content.module.scss";
import classNames from "classnames/bind";
import { fetchUsers } from "../../store/actions/fetchUsers";
import { useSelector } from "react-redux";
import { getUsers } from "../../store/selectors/userSelectors";
import Loader from "../common/Loader/Loader";

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
      <div className={cx("content__users")}>
        {users?.map(({ userId, url, avatarUrl, login, type }) => (
          <UserCard
            key={userId}
            userId={userId}
            url={url}
            avatarUrl={avatarUrl}
            login={login}
            type={type}
          />
        ))}
      </div>

      {loading && <Loader />}
      {error && <div className={cx("error")}>{error}</div>}
    </div>
  );
};

export default Content;
