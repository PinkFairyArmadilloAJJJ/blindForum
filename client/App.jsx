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
 // import MainContainer from './containers/MainContainer.jsx';
 class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return React.createElement('h2', null, "Hey Dude"); 
    /*
     return(
       <div>
         <MainContainer/>
       </div>
     );
    */
   }

 }

 export default App;
 