import { OPEN_SIDE_MENU } from '../constants'

export const initialState = {
  sideMenuOpened: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case OPEN_SIDE_MENU:
      return {
        ...state,
        sideMenuOpened: true
      }
    default:
      return state
  }
}
