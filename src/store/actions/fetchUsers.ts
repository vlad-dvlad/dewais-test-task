import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api/api";
import { IUser } from "../../models/IUser";

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (query: string, { rejectWithValue }) => {
    try {
      const { data } = await API.get(`search/users?q=${query}`);
      let users = [] as IUser[];
      console.log(data);
      users = data.items.map(
        (item: {
          id: number;
          login: string;
          avatar_url: string;
          url: string;
          type: string;
        }) => ({
          userId: item.id,
          login: item.login,
          avatarUrl: item.avatar_url,
          url: item.url,
          type: item.type,
        })
      );

      return users;
    } catch (e) {
      return rejectWithValue("Error! User didn't load");
    }
  }
);
