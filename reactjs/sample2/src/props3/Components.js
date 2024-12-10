import { createContext } from "react";

export const Parentcomponent= createContext();
export const Parentprovider= Parentcomponent.Provider;
export const Parentconsumer=Parentcomponent.Consumer;