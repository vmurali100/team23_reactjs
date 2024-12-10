import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./rootReducer";
export const Store = createStore(rootReducer);
