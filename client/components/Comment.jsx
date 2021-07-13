/**
 * ************************************
 *
 * @module  Comment
 * @author
 * @date
 * @description presentation component that renders a single comment
 *
 * ************************************
 */

import React from 'react';

const Comment = (props) => (
  <div className = "comment">
    {/* <p>Testing Comment...</p> */}
    <div >
      {props.metadata.userId} {props.metadata.timestamp}
    </div>
    <div>{props.contents}</div>
  </div>
);

export default Comment;