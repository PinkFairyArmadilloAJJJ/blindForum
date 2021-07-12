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
import Header from '../components/Header';
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

const mapDispatchToProps = (dispatch) => ({
  // create functions that will dispatch action creators
  addUser: (username, password, nickname, email) => dispatch(actions.addUserActionCreator(username, password, nickname, email)),
  authUser: (username, password) => dispatch(actions.authUserActionCreator(username, password)),
  // deleteUser: (username) => dispatch(actions.deleteUserActionCreator(username)),
});

// const MainContainer = (props) => {
class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <p>Testing MainContainer...</p>
        <Header />
        <CommentsContainer />
      </div>
    );
  }
};
// export default MainContainer;
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
