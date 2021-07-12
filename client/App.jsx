/**
 * ************************************
 *
 * @module  App.jsx
 * @author
 * @date
 * @description
 *
 * ************************************
 */

import React, { Component } from 'react';
import MainContainer from './containers/MainContainer';

// const App = (props) => {
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Testing App Component...</p>
        <MainContainer />
      </div>
    );
  };
}

export default App;
