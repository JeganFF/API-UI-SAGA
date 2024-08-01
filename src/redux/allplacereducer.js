import {ALL_PLACE_DETAILS} from "./types";

export const all_place_data = (data = [], action) => {
  switch (action.type) {
    case ALL_PLACE_DETAILS:
      console.log("ALL_PLACE DONE ", action);
      return [...(action.data || data)];
    
    default:
      return data;
  }
};