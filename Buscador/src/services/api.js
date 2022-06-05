import axios from "axios";

// 05775260/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;