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