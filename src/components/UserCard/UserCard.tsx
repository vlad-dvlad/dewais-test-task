import { FC } from "react";
import Styles from "./userCard.module.scss";
import classnames from "classnames/bind";
import { IUser } from "../../models/IUser";

const cx = classnames.bind(Styles);

const UserCard: FC<IUser> = ({ userId, login, avatarUrl, type, url }) => {
  return (
    <div className={cx("userCard", "userCard__container")}>
      <img
        src={avatarUrl}
        alt="User avatar"
        className={cx("userCard__image")}
      />
      <div className={cx("userCard__text")}>
        <span>User id: </span> {userId}
      </div>
      <div className={cx("userCard__text")}>
        <span>User login: </span>
        {login}
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href={url}
        className={cx("userCard__text")}
      >
        Go to profile
      </a>
      <div className={cx("userCard__text")}>
        <span>User type: </span>
        {type}
      </div>
    </div>
  );
};

export default UserCard;
