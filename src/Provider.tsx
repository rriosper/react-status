import React from "react";

import createStore from "./createStore";
import context from "./context";
import { ProviderProps } from "./types";

const Provider: React.FC<ProviderProps> = ({ children }: ProviderProps) => {
  const store = createStore();
  return <context.Provider value={store}>{children}</context.Provider>;
};

export default Provider;
