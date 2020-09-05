// store.js
import React, { createContext, useState } from 'react';

const initialState = 0; //prefilled data for testing purposes only
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [equipment, setEquipment] = useState(null)
  const [exercises, setExercises] = useState(null)
  const [exercisestats, setExerciseStats] = useState(null)
  const [gUser, setGUser] = useState(null)
  return <Provider value={{ equipment, setEquipment, exercises, setExercises, exercisestats, setExerciseStats, gUser, setGUser }}>{children}</Provider>;
};

export { store, StateProvider }