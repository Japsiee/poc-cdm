import { AppProviders } from "layouts/Providers";
import React from "react";

// interfaces
import { IAppLayout } from "./interface";

export const AppLayout: React.FC<IAppLayout> = ({children}) => {
  return(
    <AppProviders>
      {children}
    </AppProviders>
  )
}