/* A reducer is actually just a function that gets two properties
it gets a state object which represents the last state or an initial state.
*
*/
const INITIAL_STATE = {
  currentUser: null
}
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;