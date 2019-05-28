const SET_HOME = 'SET_HOME'
const SET_ABOUT = 'SET_ABOUT'

export const setHome = (data) => {
  return {
    type: SET_HOME,
    data,
  }
}

export const selectHome = (state) => {
  return state.home || {}
}

export const setAbout = (data) => {
  return {
    type: SET_ABOUT,
    data,
  }
}

export const selectAbout = (state) => {
  return state.about || {}
}

// This example opts for a very simple Redux store
// As these scale in complexity, it might be worth
// it to check out more opinionated redux designs.
export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_HOME:
      return {
        ...state,
        home: action.data,
      }
    case SET_ABOUT:
      return {
        ...state,
        about: action.data,
      }
    default:
      return state
  }
}
