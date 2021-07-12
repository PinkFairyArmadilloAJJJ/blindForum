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

 import React from 'react';

 const writeComment= props => (
  <form id = "writeComment">
    <input type='textarea'></input>
    <button type='submit' id='addComment' onClick={(event) => props.addComment(event.target.value)}>Submit</button>
  </form>
);

 export default writeComment;