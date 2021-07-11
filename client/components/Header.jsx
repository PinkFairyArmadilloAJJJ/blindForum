/**
 * ************************************
 *
 * @module  Header
 * @author
 * @date
 * @description presentation component that renders header information and login/sign-in
 *
 * ************************************
 */

 import React from 'react';

 const header = props => (
     <div className = "header">
       {/* display header info */}
       <div >{props.name}</div>

       {/* login/sign-in button */}
     </div>
   )
 
 export default header;