
// user is a parameter, you can pass a object parameter here
// this shape of an object is all a action is
export const setCurrentUser = user =>({
  type: 'SET_CURRENT_USER',
  payload: user
})

// here is the user action