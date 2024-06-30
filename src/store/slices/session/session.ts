import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Session {
  userId: string;
}

interface SessionState {
  session?: Session;
}

const initialState: SessionState = {
  session: undefined,
};

export const sessionSlice = createSlice({
  initialState,
  name: 'session',
  reducers: {
    clearSession(state) {
      state.session = initialState.session;
    },
    updateSession(state, action: PayloadAction<Session>) {
      state.session = action.payload;
    },
  },
});

export const { clearSession, updateSession } = sessionSlice.actions;
