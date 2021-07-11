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

import React from 'react';
import Comment from './Comment';


const CommentsDisplay = props => {
  {/* Pull comment objects from commentList, convert into Market components,
  populate array with Market components, and insert into .displayBox */}
  const comments = [];
  props.commentList.forEach((comment, i) => {
    comments.push(<Comment
      key={i}
      // marketId={market.marketId}  
      // marketLocation={market.marketLocation}
      // numCards={market.numCards}
      // percentCards={market.percentCards}
      // addCard={props.addCard}
      // deleteCard={props.deleteCard}
    />);
  });
  return (
    <div className="">
      {comments}
    </div>
  );
};

export default CommentsDisplay;