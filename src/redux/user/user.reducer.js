/* A reducer is actually just a function that gets two properties
it gets a state object which represents the last state or an initial state.
*
*/

import {UserActionTypes} from './user.types'

console.log("*******************")
console.log(UserActionTypes.SET_CURRENT_USER)


const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;