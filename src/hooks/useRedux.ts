// Use throughout your app instead of plain `useDispatch` and `useSelector`
// See: https://react-redux.js.org/using-react-redux/usage-with-typescript#define-typed-hooks

import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
