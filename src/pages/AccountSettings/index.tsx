import React from 'react';

// providers
import { PageProviders } from 'layouts/Providers';

// interfaces
import { IAccountSettings } from './interface';

export const AccountSettings: React.FC<IAccountSettings> = () => {
  // const electron = (window as any).electron;

  return (
    <PageProviders>
      <p>account settings</p>
    </PageProviders>
  )
};
