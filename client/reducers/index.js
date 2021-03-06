/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';

 // import all reducers here
 import commentReducer from './commentReducer';
 import userReducer from './userReducer';
 
 
 // combine reducers
 const reducers = combineReducers({
   // if we had other reducers, they would go here
   comment: commentReducer,
   user: userReducer,
 });
 
 // make the combined reducers available for import
 export default reducers;
 
 