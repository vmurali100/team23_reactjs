import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "./Store/rootReducer";
export const Store = createStore(rootReducer, applyMiddleware(thunk));
