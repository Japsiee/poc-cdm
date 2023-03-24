import React from 'react';

// interfaces
import { ISideBar } from './interface';

// icons
import { FaClinicMedical } from 'react-icons/fa';
import { IoSettingsSharp } from 'react-icons/io5';
import { RiShutDownLine } from 'react-icons/ri';
import { MdHomeFilled } from 'react-icons/md';

// mantine
import { Flex, Text, Divider } from '@mantine/core';

// styles
import { useStyles } from './styles';

// zustand
import { useNavigator } from 'zustand/navigator';

// components
import { NavigatorLink } from 'components/NavigatorLink';

export const Sidebar: React.FC<ISideBar> = () => {
  // global state
  const { active } = useNavigator();

  const styles = useStyles();

  return (
    <Flex direction="column" className={styles.page} justify="space-between">
      <Flex direction="column">
        <Flex align="center">
          <FaClinicMedical className={styles.titleIcon} />
          <Text className={styles.title}>Clinical Data Management</Text>
        </Flex>
        <Divider my={12} />
        <NavigatorLink
          title="Home"
          name="home"
          type="link"
          icon={<MdHomeFilled size="20px" />}
          isActive={active === 'home'}
        />
      </Flex>

      <Flex direction="column">
        <NavigatorLink
          title="Account Settings"
          name="account-settings"
          type="link"
          icon={<IoSettingsSharp size="20px" />}
          isActive={active === 'account-settings'}
        />
        <NavigatorLink
          title="Log out"
          name="logout"
          type="button"
          icon={<RiShutDownLine size="20px" />}
        />
      </Flex>
    </Flex>
  );
};
