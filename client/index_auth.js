/**
 * ************************************
 *
 * @module  index.js
 * @author
 * @date
 * @description entry point for application. Hangs React app off of #contents in index.html
 *
 * ************************************
 */

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import store from './store';
import './App.css';

render(
  <div className="frontPage">
    <LoginForm />
    <SignupForm />
  </div>
  , document.querySelector('#root')
);