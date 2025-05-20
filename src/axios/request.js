import axios from "axios";

const requestAxios = axios.create({
  baseURL: import.meta.env.VITE_FB_URL,
});

export default requestAxios;
