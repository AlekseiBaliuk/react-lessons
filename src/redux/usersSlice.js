import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchUsers, addUser, deleteUser } from './usersOparations';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter(user => user.id !== action.payload);
      })
      .addMatcher(
        isAnyOf(fetchUsers.pending, addUser.pending, deleteUser.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(fetchUsers.rejected, addUser.rejected, deleteUser.rejected),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      )
      .addMatcher(
        isAnyOf(fetchUsers.fulfilled, addUser.fulfilled, deleteUser.fulfilled),
        state => {
          state.isLoading = false;
          state.error = null;
        }
      ),
});

