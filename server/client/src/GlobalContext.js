// store.js
import React, {createContext, useState} from 'react';

const initialState = 0; //prefilled data for testing purposes only
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ( { children } ) => {
  const [state, setState] = useState(initialState)
  return <Provider value={{ state, setState }}>{children}</Provider>;
};

export { store, StateProvider }