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
     <div id = "writeComment">
       {/* setAction needs to be updated */}
       <input type='text' onChange={(event) => props.setAction(event.target.value)}></input>
       <button type='button' id='addComment' onClick={props.addComment}>submit</button>
     </div>
   )
 
 export default writeComment;