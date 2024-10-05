import { createSelector } from '@reduxjs/toolkit';
import { selectSelf } from '../store';

export const selectUser = createSelector(selectSelf, state => state.user);

export const selectUserName = createSelector(
    selectUser,
    ({ user }) => user.name,
  );

export const selectUserEmail = createSelector(
    selectUser,
    ({ user }) => user.email,
  );