import axios from "axios";
import { store } from "./redux/store";

const BASE_URL = "https://jobs-api-u83r.onrender.com/api/";
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user)?.currentUser;
const TOKEN = currentUser?.accessToken;

const state = store.getState()
console.log(state);

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
});