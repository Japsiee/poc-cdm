// react
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// zustand
import { useNavigator } from 'zustand/navigator';

// mantine
import { Flex, Paper } from '@mantine/core';

// interface
import { INavigatorLink } from './interface';
import { useStyles } from './styles';

export const NavigatorLink: React.FC<INavigatorLink> = ({
  title,
  icon,
  name,
  type,
  isActive,
}) => {
  const navigate = useNavigate();
  const styles = useStyles();

  // global state
  const { setActive } = useNavigator();

  const navigateUser = () => {
    let route;

    if (name === 'home') {
      route = '/';
    } else {
      route = `/${name}`;
    }

    setActive(name);
    navigate(route);
  };

  return (
    <button
      onClick={navigateUser}
      disabled={type === 'button'}
      className={styles.page}
    >
      <Flex
        align="center"
        className={
          isActive ? styles.navigatorLinkActive : styles.navigatorLinkDefault
        }
      >
        {icon}
        <Paper className={styles.link}>{title}</Paper>
      </Flex>
    </button>
  );
};
