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
// import Login from '../components/Login';
// import CommentsContainer from '../containers/CommentsContainer';

class MainContainer extends Component {
  // constructor(props) {
  //   super(props);
  // };

  render() {
    return(
      <div>
        <p>Testing MainContainer</p>
        {/* <Login isShowLogin={isShowLogin} /> */}
        <Header />
        {/* <CommentsContainer /> */}
      </div>
    );
  };
}
// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default MainContainer;

/**
 * GET/POST requests
 */

 componentDidMount() {
  fetch('/api/')
    .then(res => res.json())
    .then((characters) => {
      if (!Array.isArray(characters)) characters = [];
      return this.setState({
        characters,
        fetchedChars: true
      });
    })
    .catch(err => console.log('Characters.componentDidMount: get characters: ERROR: ', err));
}