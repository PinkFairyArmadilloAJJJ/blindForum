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
 // import from child components...
import CommentChainDisplay from '../components/CommentChainDisplay.jsx';

// mapStateToProps
// function mapStateToProps (state) {
//   // destructure for comment
//   const { comment } = state;

//   return {comment : comment};
// }


class MainContainer extends Component {
  constructor(props) {
    super(props);

    render() {
      console.log('From MainContainer...');

      return(
        <div>
          <CommentChainDisplay comment = {}/>
        </div>
      );
    }
  }
}

// export default connect(mapStateToProps, null) (MainContainer);