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
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.ADD_USER:
        
        // update state
        return {
          ...state,

        };
    }
  };

export default userReducer;