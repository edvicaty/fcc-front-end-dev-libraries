import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const defaultState = {
  darkMode: { isDarkMode: false },
  testReducer: { testState: true }
}

const store = createStore(rootReducer, defaultState)

export default ({ element }) => (
  <Provider store={store}>{element}</Provider>
);