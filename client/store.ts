/**
 * ************************************
 *
 * @module  store.js
 * @author
 * @date
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

import { createStore, applyMiddleware, Store } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

const store: Store<ArticleState, ArticleAction> & {
  dispatch: DispatchType
} = createStore(reducers, applyMiddleware(thunk), composeWithDevTools());
export default store;
