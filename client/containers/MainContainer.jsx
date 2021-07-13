/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders CommentChainDisplay
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import * as actions from '../actions/actions'
import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
// import Authentication from '../components/Header';
import CommentsContainer from '../containers/CommentsContainer';

const mapStateToProps = (state) => {
  const {
    username,
    password,
    nickname,
    email,
  } = state;
  return { username, password, nickname, email };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // create functions that will dispatch action creators
    addUser: (username, password, nickname, email) => dispatch(actions.addUserActionCreator(username, password, nickname, email)),
    authUser: (username, password) => dispatch(actions.authUserActionCreator(username, password)),
    // deleteUser: (username) => dispatch(actions.deleteUserActionCreator(username)),
  };
};

// const MainContainer = (props) => {
class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="MainContainer">
        <Header 
          authUser={this.props.authUser} 
          addUser={this.props.addUser} />
        <CommentsContainer />
        <LoginForm />
        <SignupForm />
      </div>
      );
    }

};
// export default MainContainer;
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);

/*

    return(
      <div className="App">
        <BrowserRouter>
          <div className="header">
            <NavLink activeClassName="active" to="/api/user/signin">Authentication</NavLink>
            <NavLink activeClassName="active"  to="/api/comment/get">Forum</NavLink>
          </div>
          <div className="contents">
            <Switch>
              <Route exact path="/api/user/signin" component={Authentication} authUser={this.props.authUser} addUser={this.props.addUser} />
              <Route exact path="/api/comment/get" component={CommentsContainer} />          
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );

*/


/*
  initial code saved here

*/