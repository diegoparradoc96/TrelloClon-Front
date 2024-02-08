import { createContext, useContext, ReactNode } from "react";

import { IGlobalContext, MyFuncs } from "../context";

const GlobalContext = createContext<IGlobalContext | null>(null);

export const MyGlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const myFuncs = new MyFuncs();

  const globalContext = {
    myFuncs: myFuncs,
  };

  return (
    <GlobalContext.Provider value={globalContext}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error(
      "useGlobalContext debe usarse dentro de MyGlobalContextProvider"
    );
  }

  return context;
};
