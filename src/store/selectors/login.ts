import { createSelector } from '@reduxjs/toolkit';
import { selectSelf } from '../store';

export const selectLogin = createSelector(selectSelf, state => state.login);

export const selectLoginEmail = createSelector(
  selectLogin,
  ({ login }) => login.email ?? '',
);

export const selectLoginPassword = createSelector(
  selectLogin,
  ({ login }) => login.password ?? '',
);
