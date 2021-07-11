/**
 * ************************************
 *
 * @module  Login
 * @author
 * @date
 * @description presentation component that renders Login information 
 *
 * ************************************
 */

import React from "react";

const Login = ({ isShowLogin }) => {

  return (
    <div className={`${!isShowLogin ? "active" : ""} show`}>
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
                <input type="submit" value="LOGIN" className="login-btn" />
          </form>
        </div>
      </div>
  );
};

export default Login;



//   <form>
//   <h1>Sign In</h1>
//   <label>Username</label><br></br>
//   <input
//     type="text"
//     name="username"
//     /><br></br>
//   <label>Password</label><br></br>
//   <input
//     type="password"
//     name="password"
//     /><br></br>
//   <input type="submit" value="LOGIN" className="login-btn" />
// </form>