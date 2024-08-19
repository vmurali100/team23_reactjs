import { createStore } from 'redux';
import { rootReducer } from './Reducer';

export const Store = createStore(rootReducer)