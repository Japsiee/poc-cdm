// react
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// mantine
import { Flex, Text, Tooltip } from '@mantine/core';

// interfaces
import { ILogin } from './interface';

// fluent ui
import {
  Button,
  Input,
  InputProps,
  TextProps,
} from '@fluentui/react-components';

// icons
import { HiOutlineEye, HiEye } from 'react-icons/hi';
import { IoMdExit } from 'react-icons/io';

// styles
import { useStyles } from './styles';

// constants
import { CUser } from './constants';

// example credential
import { users } from './exampleCred';
import { useProfile } from 'zustand/profile';

// function declarations
let handleExit: () => void;

export const Login: React.FC<ILogin> = () => {
  // global state
  const { setProfile } = useProfile();

  // styles
  const styles = useStyles();

  // local states
  const [user, setUser] = useState(CUser);
  const [visible, setVisible] = useState(false);

  // handler functions
  const handleUsername: InputProps['onChange'] = (ev, { value }) => {
    setUser((prev) => ({ ...prev, name: value }));
  };

  const handlePassword: InputProps['onChange'] = (ev, { value }) => {
    setUser((prev) => ({ ...prev, password: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLButtonElement>) => {
    console.log(user);

    const result = users.filter((u) => u.name === user.name);

    if (result.length >= 1) {
      const profile = {
        name: result[0].name,
        isAuth: result[0].isAuth,
        data: result[0].data,
        auth: result[0].auth,
      };

      setProfile(profile);
    } else {
      console.log('no matching credentials');
    }
  };

  // inside component
  const EyeButton: React.FC<TextProps> = () => {
    // handler functions
    const handleClick = () => {
      setVisible((prev) => !prev);
    };

    return (
      <Text className={styles.eyeButton} onClick={handleClick}>
        {visible ? <HiEye /> : <HiOutlineEye />}
      </Text>
    );
  };

  handleExit = () => {
    const electron = (window as any).electron;
    electron.ipcRenderer.sendMessage('close-app', true);
  };
  
  // fetch all available removable disks
  const handlePython = () => {
    const electron = (window as any).electron;
    electron.ipcRenderer.sendMessage('get-drives', true);
  }
  
  // basically a listener that sends client a message every time it invokes the fetch all removable disks function
  useEffect(() => {
    const electron = (window as any).electron;
    electron.ipcRenderer.on('get-drives', (arg: any) => {
      if (arg === 'no-drive-detected') {
        console.log('no argument');
      } else {
        console.log(arg);
      }
    });
  }, [])

  return (
    <Flex direction="column" className={styles.page}>

      <Flex className={styles.imagePlaceholder} />
      {/* this is the form container itself --- start --- */}
      <Flex direction="column">
        <Text className={styles.inputLabel}>Username</Text>
        <Input
          value={user.name}
          onChange={handleUsername}
          className={styles.input}
          type="text"
        />
        <Text className={styles.inputLabel}>Password</Text>
        <Input
          value={user.password}
          onChange={handlePassword}
          className={styles.input}
          type={visible ? 'text' : 'password'}
          contentAfter={<EyeButton />}
        />

        <Link to="/" className={styles.forgotPassword}>
          Forgot password?
        </Link>

        <Button className={styles.submitButton} onClick={handleSubmit}>
          Log in
        </Button>

        
        <button onClick={handlePython}>get drive list</button>
      </Flex>
      {/* this is the form container itself --- end --- */}

      {/* floating exit button - placement at the bottom right */}
      <Tooltip
        title="exit"
        label="Exit"
        position="top-end"
        withArrow
        className={styles.floatingExitButton}
        onClick={handleExit}
      >
        <Button icon={<IoMdExit />} />
      </Tooltip>
    </Flex>
  );
};
