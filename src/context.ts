import { createContext } from "react";
import createStore from "./createStore";
import { Context } from "./types";

const context: Context = createContext(createStore());

export default context;
