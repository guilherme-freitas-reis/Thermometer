import Axios from "axios";

const api = Axios.create({
  baseURL: "https://api-cronos-guilhermereis-dev-br.umbler.net",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Content-Type": "application/json",
  },
});

export default api;
