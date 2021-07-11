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
// import { View, Button, Overlay } from 'react-native-elements';

const header = props => {
  const [visible, setVisible] = useState(false);
  const toggleOverlay = () => {
    setVisible(!visible);
  };  

  return (
    <div>
      <p>Testing header</p>
      <button onClick={toggleOverlay}>Sign In</button>
    </div>
  );
}

export default header;
