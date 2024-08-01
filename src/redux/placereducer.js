import {GET_PLACE} from "./types";

export const place_data = (data = [], action) => {
  switch (action.type) {
    case GET_PLACE:
      console.log("GET_PLACE DONE ", action);
      return [...(action.data ||data)];
    
    default:
      return data;
  }
};