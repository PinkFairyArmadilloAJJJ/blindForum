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
// import Login from '../components/login';
// import CommentsContainer from '../containers/CommentsContainer';

class MainContainer extends Component {
  // constructor(props) {
  //   super(props);
  // };

  render() {
    return(
      <div>
        <p>Testing MainContainer</p>
        <LoginForm isShowLogin={isShowLogin} />
        <Header />
        {/* <CommentsContainer /> */}
      </div>
    );
  };
}
// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default MainContainer;
