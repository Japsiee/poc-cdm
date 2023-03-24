// react
import React from 'react';
import { Link } from 'react-router-dom';

// pages
import { Login } from 'pages/Login';

// layouts
import { Sidebar } from 'layouts/Sidebar';

// interfaces
import { IProviders } from './interface';

// fluent
import { FluentProvider, teamsLightTheme } from '@fluentui/react-components';

// zustand
import { useProfile } from 'zustand/profile';

// mantine
import { Flex } from '@mantine/core';

export const AppProviders: React.FC<IProviders> = ({ children }) => {
  return <FluentProvider theme={teamsLightTheme}>{children}</FluentProvider>;
};

export const PageProviders: React.FC<IProviders> = ({ children }) => {
  const { profile, clearProfile } = useProfile();

  return !profile?.isAuth ? (
    <Login />
  ) : (
    <Flex>
      <Sidebar />
      {children}
    </Flex>
  );
};
