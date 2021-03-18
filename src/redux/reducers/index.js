import { combineReducers } from 'redux';
import { darkMode } from './darkMode';
import { testReducer } from './testReducer';

export default combineReducers({ darkMode, testReducer });