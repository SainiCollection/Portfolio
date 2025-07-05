import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  email: '',
  id: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState, // fixed typo from initalState
  reducers: {
    setUser(state, action) {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.id = action.payload.id;
    },
    clearUser(state) {
      state.userName = '';
      state.email = '';
      state.id = '';
    },
  },
});
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;