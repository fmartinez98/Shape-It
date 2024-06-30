import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  email?: string;
}

interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    name: '',
    email: '',
  },
};

export const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    clearUser(state) {
      state.user = {
        ...initialState.user,
      };
    },
    updateUserName(state, action: PayloadAction<string>) {
      state.user.name = action.payload;
    },
    updateUserEmail(state, action: PayloadAction<string>) {
      state.user.email = action.payload;
    },
  },
});

export const { clearUser, updateUserName, updateUserEmail } = userSlice.actions;
