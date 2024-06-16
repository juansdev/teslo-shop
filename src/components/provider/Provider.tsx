import {SessionProvider} from "next-auth/react";
import {ReactNode} from "react";

interface IProviderProps {
  children: ReactNode;
}

export const Provider = ({children}: IProviderProps) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
}