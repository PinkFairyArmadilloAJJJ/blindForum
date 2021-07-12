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
    <p>Testing Comment...</p>
    {/* display name/nickename, timeStamp */}
    <div >{props.name}{props.timeStamp}minutes ago</div>
    {/* Display comment */}
    <div>{props.comment}</div>
  </div>
);

export default Comment;