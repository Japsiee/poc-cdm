import React from 'react';

// providers
import { PageProviders } from 'layouts/Providers';

// interfaces
import { IHome } from './interface';

// mantine
import { Flex, Paper, Text } from '@mantine/core';

// styles
import { useStyles } from './styles';
import { useProfile } from 'zustand/profile';

// icons
import { RxDotFilled } from 'react-icons/rx';
import { AiOutlinePlusCircle } from 'react-icons/ai';

// fluent ui
import { Button } from '@fluentui/react-components';

export const Home: React.FC<IHome> = () => {
  // const electron = (window as any).electron;
  const { profile } = useProfile();

  const styles = useStyles();

  return (
    <PageProviders>
      <Flex className={styles.page} direction="column">
        {/* left side */}
        <Flex justify="space-between">
          <Flex direction="column">
            <Text className={styles.welcome}>
              Welcome, {profile?.name.toUpperCase()}
            </Text>

            <Flex className={styles.statusContainer}>
              <Text className={styles.statusActive}>Online</Text>
              <RxDotFilled color="#C4CAD4" className={styles.dot} />
              <Text className={styles.sync}>All records synced</Text>
            </Flex>
          </Flex>

          {/* right side */}
          <Flex align="start" className={styles.rightPadding}>
            <Flex align="center">
              <Paper className={styles.connectedDevicesContainer}>
                <Text className={styles.device1}>Connected device</Text>
                <Text className={styles.device2}>Medonic M32 Hematology</Text>
              </Paper>
              <Button icon={<AiOutlinePlusCircle />} className={styles.newTestBtn}>New Medical Test</Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </PageProviders>
  );
};
