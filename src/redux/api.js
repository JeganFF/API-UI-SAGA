import axios from "axios";
const API_URL =
  "https://api.zameensquare.com/api/search/auto-complete?page_no=0";

export function ApiCall() {
  return axios.post(API_URL, {
    city_name: "",
    search_string: "",
  });
}
