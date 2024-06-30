import { useCallback } from 'react';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useStore } from 'react-redux';
import { loginSlice } from './slices/login/login';
import { sessionSlice } from './slices/session/session';
import { userSlice } from './slices/user/user';

const rootReducer = combineReducers({
  login: loginSlice.reducer,
  session: sessionSlice.reducer,
  user: userSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    // Specify application middlewares, i.e. Logging, Additional API services
    middleware: getDefaultMiddleware => {
      const middleware = getDefaultMiddleware();

      // if (__DEV__) {
      //   const createDebugger = require('redux-flipper').default;
      //   middleware.push(createDebugger());
      // }

      return middleware;
    },
  });
};

// Re-usable Root Store selector
export const selectSelf = (state: RootState) => state;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;

/**
 * Allows for state to be read lazily with our selectors.
 * Useful for reading data on callbacks while avoiding unnecessary renders.
 */
export const useLazySelector = <T>(selector: (state: RootState) => T) => {
  const store = useStore<RootState>();

  return useCallback(() => selector(store.getState()), [store, selector]);
};

export type AppStore = ReturnType<typeof setupStore>;

export type AppDispatch = AppStore['dispatch'];
