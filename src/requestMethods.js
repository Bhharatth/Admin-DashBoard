import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDFhMjBiMGYxZDdmYjk1YTBkOGUzNyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Nzc5MDk0MDAsImV4cCI6MTY3ODE2ODYwMH0.U4S_9-wyo9_j3TVMXESCqXdrfxVRmAZhRQ1MW-tvM0s`
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser.accessToken;
console.log(TOKEN);

export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    token: `Bearer ${TOKEN}`,
  },
});
