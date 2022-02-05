import React, { useReducer } from "react";
import stateContext from "./stateContext";

import { setDate, setAppearanceMode, setDb } from "./actions";
import reducer from "./reducer";
import moment from "moment";
import { openDatabase, DEBUG } from 'react-native-sqlite-storage';



const initialState = {
  date: moment(),
  appearanceMode: null,
  db: null
};

const GlobalState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);


  return (
    <stateContext.Provider
      value={[
        state,
        {
          setDate: setDate(dispatch),
          setAppearanceMode: setAppearanceMode(dispatch),
          setDb: setDb(dispatch)
        }
      ]}
    >
      {children}
    </stateContext.Provider>
  );
};

export default GlobalState;
