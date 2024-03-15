import axios from "axios";

axios.defaults.baseURL = "https://pp-5-drf-api-cb9dad6bdfdf.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();
