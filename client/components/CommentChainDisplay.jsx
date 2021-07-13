/**
 * ************************************
 *
 * @module  CommentChainDisplay
 * @author
 * @date
 * @description presentation component that renders a Comment chain
 *
 * ************************************
 */

import React, { Component } from 'react';
import Comment from './Comment';


class CommentsDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalComments: 0,
      lastCommentId: 0,
      lastCommentTimestamp: new Date(),
      topVotedList: [],
      commentList: [],
    }
  }
  
  componentDidMount () {
    fetch('/api/comment/get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(doc => this.setState({
        commentList: doc
      }))
      .catch(err => console.error(err));
  }

  render() {
    const { commentList } = this.state;
    const commentElems = commentList.map((comment, i) => {
      return (
        <Comment
          key={i}
          commentId={comment.commentId}
          contents={comment.contents}
          metadata={comment.metadata}
          votes={comment.votes}
          parentId={comment.parentId}
          depthLevel={comment.depthLevel}  
        />
      )
    })
    return (
      <div className="commentsContainer">
        <p>Testing CommentsDisplay...</p>
        {commentElems}
        <br />
      </div>
    );
  }
};

export default CommentsDisplay;