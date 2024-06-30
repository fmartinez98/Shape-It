import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Login {
  email: string | null;
  password: string | null;
}

interface LoginState {
  login: Login;
}

const initialState: LoginState = {
  login: {
    email: null,
    password: null,
  },
};

export const loginSlice = createSlice({
  initialState,
  name: 'login',
  reducers: {
    clearLogin(state) {
      state.login = initialState.login;
    },
    updateLoginEmail(state, action: PayloadAction<string>) {
      state.login.email = action.payload;
    },
    updateLoginPassword(state, action: PayloadAction<string>) {
      state.login.password = action.payload;
    },
  },
});

export const { clearLogin, updateLoginEmail, updateLoginPassword } =
  loginSlice.actions;
