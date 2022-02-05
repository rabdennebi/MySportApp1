export const SET_APPEARANCE_MODE = "SET_APPEARANCE_MODE";
export const SET_DB = "SET__DB";
export const SET_DATE = "SET_DATE";


export const setAppearanceMode = dispatch => appearanceMode =>
  dispatch({ type: SET_APPEARANCE_MODE, payload: appearanceMode });

export const setDb = dispatch => db =>
  dispatch({ type: SET_DB, payload: db });

export const setDate = dispatch => date =>
  dispatch({ type: SET_DATE, payload: date });