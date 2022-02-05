import { useContext } from "react";
import StateContext from "./stateContext";

const useGlobalState = () => {
  const context = useContext(StateContext);
  return context;
};

export default useGlobalState;
