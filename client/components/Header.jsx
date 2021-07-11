/**
 * ************************************
 *
 * @module  Header
 * @author
 * @date
 * @description presentation component that renders header information and login/sign-in
 *
 * ************************************
 */

import React, { useState } from 'react';
import Login from './Login'
// import { View, Button, Overlay } from 'react-native-elements';

const Header = props => {
  // const [visible, setVisible] = useState(false);
  // const toggleOverlay = () => {
  //   setVisible(!visible);
  // };  

  return (
    <div>
      <p>Testing header</p>
      {/* <button onClick={}>Sign In</button> */}
      <Login />
    </div>
  );
}

export default Header;
