/**
 * ************************************
 *
 * @module  LoginForm
 * @author
 * @date
 * @description stateful component that renders Login form 
 *
 * ************************************
 */

import React, { Component } from "react";

// const LoginForm = (props) => {
class LoginForm extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="login-form">
        <form>
          <h1 className="login-text">Sign In</h1>
          <label>Username</label><br></br>
          <input
            type="text"
            name="username"
            className="login-box"
          /><br></br>
          <label>Password</label><br></br>
          <input
            type="password"
            name="password"
            className="login-box"
          /><br></br>
          <input
            type="submit"
            value="LOGIN"
            className="login-btn"
            // onClick={(event) => props.authUser(...event.target.value)}
          />
        </form>
      </div>
    );
  };
};

export default LoginForm;
