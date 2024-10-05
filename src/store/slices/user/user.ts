import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  lastName: string,
  email: string;
  phone: number;
}

interface UserState {
  user: User;
}

const initialState: UserState = {
  user: {
    name: '',
    lastName: '',
    email: '',
    phone: 0
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
    updateUserLastName(state, action: PayloadAction<string>) {
      state.user.lastName = action.payload;
    },
    updateUserEmail(state, action: PayloadAction<string>) {
      state.user.email = action.payload;
    },
    updateUserPhone(state, action: PayloadAction<number>) {
      state.user.phone = action.payload;
    },
  },
});

export const { clearUser, updateUserName, updateUserEmail } = userSlice.actions;
