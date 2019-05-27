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
