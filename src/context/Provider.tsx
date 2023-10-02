import Context from "./Context";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

function Provider({ children }: ProviderProps) {

  return (
    <Context.Provider value>
      {children}
    </Context.Provider>
  )
}

export default Provider;