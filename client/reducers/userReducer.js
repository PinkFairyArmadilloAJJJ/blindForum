/**
 * ************************************
 *
 * @module  userReducer
 * @author
 * @date
 * @description reducer for user account data
 *
 * ************************************
 */

 import * as types from '../constants/actionTypes';

// dummy data
const initialState = {
  username: '',
  password: '',
  nickname: '',
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER:
      fetch('/api/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: { ... action.payload },
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err));
      return {
        ...state,
        ...action.payload,
      };
    
    case types.AUTH_USER:
      fetch('/api/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: { ...action.payload },
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err)); 
      return {
        ...state,
        ...action.payload,
      };

    default: {
      return state;
    };
  }
};

export default userReducer;