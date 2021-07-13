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

import React, { Component } from 'react';

class Header extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className = "header">
        {/* <p>Testing loginHeader...</p> */}
        {/* <LoginForm authUser={this.props.authUser} addUser={this.props.addUser}/> */}
      </div>
    );
  }
};

export default Header;
