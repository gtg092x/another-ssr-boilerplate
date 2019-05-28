import { setHome, setAbout } from './reducer'

// These are where we get our data! Treat them like any other thunk
export const loadHome = () => async (dispatch, getState, services) => {
  setHome(null)
  const { data }  = await services.client('/api/home')
  dispatch(setHome(data))
  return data;
};

export const loadAbout = () => async (dispatch, getState, services) => {
  setAbout(null)
  const { data }  = await services.client('/api/about')
  dispatch(setAbout(data))
  return data;
};
