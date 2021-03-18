import React from 'react';
import { Provider } from 'react-redux';
// import { createStore as reduxCreateStore } from 'redux';
import { createStore } from 'redux';
import rootReducer from '.';

// const createStore = () => reduxCreateStore(rootReducer);


// export default ({ element }) => (
//   <Provider store={createStore()}>{element}</Provider>
// );

const defaultState = {
  isDarkMode: false
}

const store = createStore(rootReducer, defaultState)

export default ({ element }) => (
  <Provider store={store}>{element}</Provider>
);