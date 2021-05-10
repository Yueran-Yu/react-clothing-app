// user is a parameter, you can pass a object parameter here
// this shape of an object is all a action is

import {UserActionTypes} from './user.types'

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
})
