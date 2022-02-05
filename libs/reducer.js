import {  SET_DATE, SET_APPEARANCE_MODE, SET_DB } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_DATE: {
      return {
        ...state,
        date: action.payload,
      };
    }
    case SET_APPEARANCE_MODE: {
      return { 
        ...state,
        appearanceMode: action.payload 
      };
    }
    case SET_DB: {
      return { 
        ...state,
        db: action.payload 
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
