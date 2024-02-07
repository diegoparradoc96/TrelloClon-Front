import { createContext, useContext, ReactNode } from "react";

interface IGlobalContext {
  myFuncs: any;
}

/*  */
class MyFuncs {
  myFun() {
    console.log("Mi funcion global");
  }
}

/*  */

const GlobalContext = createContext<IGlobalContext | null>(null);

export const MyGlobalContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const myFuncs = new MyFuncs();

  return (
    <GlobalContext.Provider value={{ myFuncs: myFuncs }}>
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
