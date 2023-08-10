import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../models/IUser";
import { fetchUsers } from "../actions/fetchUsers";

interface UsersState {
  users: IUser[];
  loading: boolean;
  error: string;
}

const initialState: UsersState = {
  users: [],
  loading: false,
  error: "",
};

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.pending.type]: (state: UsersState) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled.type]: (
      state: UsersState,
      action: PayloadAction<IUser[]>
    ) => {
      state.users = action.payload;
      state.loading = false;
      state.error = "";
    },
    [fetchUsers.rejected.type]: (
      state: UsersState,
      action: PayloadAction<string>
    ) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default usersSlice.reducer;
