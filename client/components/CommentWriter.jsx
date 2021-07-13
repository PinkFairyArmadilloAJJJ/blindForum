/**
 * ************************************
 *
 * @module  CommentWriter
 * @author
 * @date
 * @description presentation component that takes user input for a new comment
 *
 * ************************************
 */

 import React, { Component } from 'react';

class CommentWriter extends Component {
  constructor(props) {
    super(props);
    this.handlePost = this.handlePost.bind(this);
  }
  
  handlePost(event) {
    event.preventDefault();
    this.props.addComment(event.target.value, this.props.currentUser, 0);
  }

  render() {
    return (
      <form id = "writeComment" >
        <input type='textarea' rows="4" cols="50"></input>
        <br></br>
        <button type='submit' id='addComment' onClick={this.handlePost}>Add Comment</button>
      </form>
    );
  }
}

export default CommentWriter;