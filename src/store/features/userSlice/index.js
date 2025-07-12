import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: '',
  email: '',
  id: '',
  // userId:''
};

const userSlice = createSlice({
  name: 'user',
  initialState, // fixed typo from initalState
  reducers: {
    setUser(state, action) {
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.id = action.payload.id;
      // state.userId = action.payload.userId;
    },
    clearUser(state) {
      state.userName = '';
      state.email = '';
      state.id = '';
      state.userId = '';

    },
  },
});
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;