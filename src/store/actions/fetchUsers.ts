import { createAsyncThunk } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { API } from "../../api/api";

export const fetchUsers = createAsyncThunk(
  "user/fetchAll",
  async (query: string, thunkApi) => {
    try {
      const response = await API.get<IUser[]>(`users?q${query}`);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  }
);
