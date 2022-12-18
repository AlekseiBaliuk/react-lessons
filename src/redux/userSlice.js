import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    items: [],
  },
  reducers: {
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    toggleStatus(state, action) {
      state.items = state.items.map(item => {
        if (item.id === action.payload) {
          if (item.status === 'no') {
            item.status = 'yes';
          } else {
            item.status = 'no';
          }
        }
        return item;
      });
    },
  },
});

export default userSlice.reducer;
export const { addContact, deleteContact, toggleStatus } = userSlice.actions;
