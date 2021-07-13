/**
 * ************************************
 *
 * @module  SignupForm
 * @author
 * @date
 * @description stateful component that renders Signup form 
 *
 * ************************************
 */

 import React, { Component } from "react";
 
class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.handleSignup = this.handleSignup.bind(this);
  };
 
  handleSignup(event) {
    event.preventDefault();
    const reqValues = [...Object.values(event.target).slice(0, 4).map(input => input.value)];
    const reqObj = Object.fromEntries(
      ['username', 'password', 'nickname', 'email']
      .map((k, i) => [k, reqValues[i]])
    );
    fetch('http://localhost:4000/api/user/signup', {
        method: 'POST', 
        mode: 'no-cors',
        body: { ...reqObj },
      },
    )
      .then(data => console.log(data))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="Signup-form">
        <form onSubmit={this.handleSignup}>
          <h1 className="login-text">Sign Up</h1>
          <label>Username</label>
          <br></br>
          <input
            type="username"
            name="username"
            className="Signup-box"
          /><br></br>

          <label>Password</label>
          <br></br>
          <input
            type="password"
            name="password"
            className="Signup-box"
          /><br></br>

          <label>Nickname</label>
          <br></br>
          <input
            type="nickname"
            name="nickname"
            className="Signup-box"
          /><br></br>                      
          
          <label>Email</label>
          <br></br>
          <input
            type="email"
            name="email"
            className="Signup-box"
          /><br></br>
          
          <button
            type="submit"
            className="Signup-btn"
          >Sign up</button>
        </form>
    </div>
    );
  };
};
 
 export default SignupForm;
 