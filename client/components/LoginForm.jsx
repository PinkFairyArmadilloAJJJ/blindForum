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
import "../App.css";

// const LoginForm = (props) => {
  class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  };

  handleLogin(event) {
    event.preventDefault();
    const reqValues = [...Object.values(event.target).slice(0, 2).map(input => input.value)];
    const reqObj = Object.fromEntries(
      ['username', 'password']
        .map((k, i) => [k, reqValues[i]])
    );
    fetch('http://localhost:4000/api/user/signin', {
        method: 'POST',
        mode: 'no-cors',
        body: { ...reqObj },
      }
    )
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.handleLogin}>
          <h1 className="login-text">Sign In</h1>
          <label>Username</label>
          <br></br>
          <input
            type="username"
            name="username"
            className="login-box"
          /><br></br>

          <label>Password</label>
          <br></br>
          <input
            type="password"
            name="password"
            className="login-box"
          /><br></br>

          <button
            type="submit"
            className="login-btn"
          >Login</button>
        </form>
    </div>
    );
  };
};

export default LoginForm;
