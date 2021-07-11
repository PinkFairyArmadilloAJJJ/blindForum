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
import CommentsContainer from '../components/containers/CommentsContainer';

class MainContainer extends Component {
  constructor(props) {
    super(props);

    render() {
      console.log('From MainContainer...');

      return(
        <div>
          <CommentsContainer />
        </div>
      );
    }
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);