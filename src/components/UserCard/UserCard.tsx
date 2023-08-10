import { FC } from "react";
import Styles from "./userCard.module.scss";
import classnames from "classnames/bind";
import { IUser } from "../../models/IUser";

const cx = classnames.bind(Styles);

const UserCard: FC<IUser> = ({ userId, login, avatarUrl, type, url }) => {
  return <div>User card</div>;
};

export default UserCard;
