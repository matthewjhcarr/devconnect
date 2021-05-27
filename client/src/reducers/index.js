import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';

// exports all reducers
export default combineReducers({ alert, auth });
