import { createSelector } from '@reduxjs/toolkit';
import { selectSelf } from '../store';

export const selectUser = createSelector(selectSelf, state => state.user);
