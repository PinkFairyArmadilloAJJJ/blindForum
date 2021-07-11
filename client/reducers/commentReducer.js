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
  lastCommentId: 0010,
  lastCommentTimestamp: Date.now(),
  topVotedList: {
    0003: 32,
    0007: 20,
  },
  commentList: [
    {
      commentId: 0003,
      contents: 'Good point!',
      metadata: {
        username = 'Jinhee',
        timestamp = Date.now(),
      },
      votes: {
        netVotes: 10,
        upvotes: 12, 
        downvotes: 2,
      },
      parentId: 0001,
      depthLevel: 1
    },
  ]
};

// newComment = {
//     commentId: state.lastCommentId + 1,
//     contents: '',
//     metadata: {
//         userId = 0,
//         createTimestamp = Date.now(),
//         editTimestamp = null,
//     },
//     votes: {
//         netVotes: 0,
//         upvotes: 0, 
//         downvotes: 0,
//     },
//     parentId: null,
//     depthLevel: 0
// }

// const initialState = {
//   totalComments: 0,
//   lastCommentId: 0,
//   lastCommentTimestamp: Date(),
//   topVotedList: [],
//   commentList: [],
// };

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_COMMENT:
      // increment lastCommentId and totalComments counters
      lastCommentId = state.lastCommentId + 1;
      totalComments = state.totalComments + 1;
      // create new comment component from provided data
      newComment = {
        commentId: state.lastCommentId + 1,
        contents: action.payload.contents,
        metadata: {
          userId = action.payload.userId,
          createTimestamp = Date.now(),
          editTimestamp = null,
        },
        votes: {
          netVotes: 0,
          upvotes: 0, 
          downvotes: 0,
        },
        parentId: action.payload.parentId,
        depthLevel: commentList.filter((el) => el.commentId === parentId).pop().depthLevel + 1,
      }
      // push the new comment onto a copy of the comment list
      commentList = state.commentList.slice();
      commentList.push(newComment);
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
    }
  }
};

export default commentReducer;