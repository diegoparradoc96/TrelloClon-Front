"use client";

import { NextUIProvider } from "@nextui-org/react";
/* GlobalContextPrivder */
import { MyGlobalContextProvider } from "../context/GlobalContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <MyGlobalContextProvider>{children}</MyGlobalContextProvider>
    </NextUIProvider>
  );
}
