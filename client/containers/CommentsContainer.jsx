/**
 * ************************************
 *
 * @module  CommentsContainer
 * @author
 * @date
 * @description stateful component that renders CommentChainDisplay and CommentWriter
 *
 * ************************************
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'
// import from child components...
import CommentsDisplay from '../components/CommentChainDisplay.jsx';
import CommentWriter from '../components/CommentWriter.jsx';
 
const mapStateToProps = (state) => {
  const {
    currentUser,
    totalComments, 
    lastCommentId, 
    lastCommentTimestamp, 
    topVotedList,
    commentList,
  } = state;
  return {
    currentUser,
    totalComments,
    lastCommentId,
    lastCommentTimestamp, 
    topVotedList,
    commentList,
  };
};

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  addComment: (contents, username, parentId) => dispatch(actions.addCommentActionCreator(contents, username, parentId)),
  // editComment: (commentId, contents) => dispatch(actions.editCommentActionCreator(commentId, contents)),
  // deleteComment: (commentId) => dispatch(actions.deleteCommentActionCreator(commentId)),
  // castUpvote: (commentId) => dispatch(actions.castUpvoteActionCreator(commentId)),
  // castDownvote: (commentId) => dispatch(actions.castDownvoteActionCreator(commentId)),
});

class CommentsContainer extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return(
      <div>
        <p>Testing CommentsContainer...</p>
        <CommentsDisplay />
        <CommentWriter 
          addComment={this.props.addComment}
          currentUser={this.props.currentUser}
        />
      </div>
    );
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
// export default connect(null, null) (CommentsContainer);
// export default CommentsContainer;