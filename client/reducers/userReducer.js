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
      fetch('http://localhost:4000/api/user/signup', {
        method: 'POST',
        mode: 'no-cors',
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        body: { ... action.payload },
      })
      .then(data => console.log(data))
      .catch(err => console.error(err));
      return {
        ...state,
        ...action.payload,
      };
    
    case types.AUTH_USER:
      fetch('http://localhost:4000/api/user/signin', {
        method: 'POST',
        mode: 'no-cors',
        // headers: {
        //   'Content-Type': 'application/json'
        // },
        body: { ...action.payload },
      })
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