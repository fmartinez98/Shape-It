import React from 'react';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import { useAppSelector } from '../hooks/useRedux';
import { selectLoginEmail } from '../store/selectors/login';

const Router = () => {
  const isUserLogged = useAppSelector(selectLoginEmail);

  if (isUserLogged) {
    return <AppStack />;
  }

  return <AuthStack />;
};

export default Router;
