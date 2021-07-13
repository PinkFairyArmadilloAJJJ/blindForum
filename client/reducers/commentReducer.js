/**
 * ************************************
 *
 * @module  commentReducer
 * @author
 * @date
 * @description reducer for comment data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

// dummy test case
const initialState = {
  totalComments: 10,
  lastCommentId: 4,
  lastCommentTimestamp: Date.now(),
  topVotedList: {
    // 0003: 32,
    // 0007: 20,
  },
  commentList: [
    {
      commentId: 36,
      contents: 'Good point!',
      metadata: {
        username: 'Jinhee',
        timestamp: Date.now(),
      },
      votes: {
        netVotes: 10,
        upvotes: 12, 
        downvotes: 2,
      },
      parentId: 1,
      depthLevel: 1
    },
  ]
};

// newComment = {
    // "commentId": 1110,
    // "contents": "post comment test 001",
    // "metadata": {
    //   "username": "jongsun",
    //   "createTimestamp": 1626115310930,
    //   editTimestamp: null
    // },
    // "votes": {
    //   "netVotes": 0,
    //   "upvotes": 0, 
    //   "downvotes": 0
    // },
    // "parentId": 1100,
    // "depthLevel": 2
// }

// const initialState = {
//   totalComments: 0,
//   lastCommentId: 0,
//   lastCommentTimestamp: new Date(),
//   topVotedList: [],
//   commentList: [],
// };

const commentReducer = (state = initialState, action) => {
  let lastCommentId, totalComments, newComment, commentList, currComment, topVotedList;
  switch (action.type) {
    case types.ADD_COMMENT:
      // increment lastCommentId and totalComments counters
      lastCommentId = state.lastCommentId + 1;
      totalComments = state.totalComments + 1;
      // create new comment component from provided data
      newComment = {
        'commentId': state.lastCommentId + 1,
        'contents': action.payload.contents,
        'metadata': {
          'username': action.payload.username,
          'timestamp': Date.now(),
          // editTimestamp: null,
        },
        'votes': {
          'netVotes': 0,
          'upvotes': 0, 
          'downvotes': 0,
        },
        'parentId': action.payload.parentId,
        // depthLevel: commentList.filter((el) => el.commentId === parentId).pop().depthLevel + 1,
      };
      // push the new comment onto a copy of the comment list
      commentList = state.commentList.slice();
      commentList.push(newComment);
      // send to db
      fetch('http://localhost:4000/api/comment/post', {
        method: 'POST',
        mode: 'no-cors',
        // headers: {
        //   'Content-Type': 'application/json',
        // },
        body: { ...newComment },
      })
        // .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error(err));
      // update state
      return {
        ...state,
        totalComments,
        lastCommentId,
        commentList,
      };
    case types.EDIT_COMMENT:
      // extract comment component where add button was clicked
      currComment = state.commentList.filter((el) => el.commentId === action.payload.commentId).pop();
      currComment.contents = action.payload.contents;
      currComment.editTimestamp = Date.now();
      // reinserts current comment component into commentList
      commentList[currComment.key] = currComment;
      // update state
      return {
        ...state,
        commentList,
      };
    case types.DELETE_COMMENT:
      // delete comment component
      commentList = state.commentList.filter((el) => el.commentId !== action.payload)
      totalComments = state.totalCards > 0 ? state.totalCards - 1 : 0;
      // update state
      return {
        ...state,
        totalComments,
        commentList,
      };
    case types.CAST_UPVOTE:
      // extract comment component where add button was clicked
      currComment = state.commentList.filter((el) => el.commentId === action.payload.commentId).pop();
      currComment.votes.upvotes += 1
      currComment.votes.netVotes += 1;
      // find comment with minimum votes in topVoteList and replace it netVotes is greater
      const [minTopVotesId, minTopVotes] = Object.entries(topVotedList).reduce((acc, curr) => curr[1] < acc[1] ? curr : acc);
      if (currComment.votes.netVotes >= minTopVotes) {
        delete topVotedList[minTopVotesId];
        topVotedList[currComment.commentId] = currComment.votes.netVotes;
      }
      // reinserts current comment component into commentList
      commentList[currComment.key] = currComment;
      // update state
      return {
        ...state,
        topVotedList,
        commentList,
      };
    case types.CAST_DOWNVOTE:
      // extract comment component where add button was clicked
      currComment = state.commentList.filter((el) => el.commentId === action.payload.commentId).pop();
      currComment.votes.downvotes += 1
      currComment.votes.netVotes -= 1;
      // find comment with minimum votes in topVoteList and if netVotes is leq, remove currComment from topVotedList
      if (topVotedList.hasOwnProperty(currComment.commentId)) {
        const [minTopVotesId, minTopVotes] = Object.entries(topVotedList).reduce((acc, curr) => curr[1] < acc[1] ? curr : acc);
        if (currComment.votes.netVotes <= minTopVotes) {
          delete topVotedList[currComment.commentId];
        }
      }
      // reinserts current comment component into commentList
      commentList[currComment.key] = currComment;
      // update state
      return {
        ...state,
        topVotedList,
        commentList,
      };

    default: {
      return state;
    };
  }
};

export default commentReducer;