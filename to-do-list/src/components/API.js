import axios from "axios";

const instance = axios.create({
  baseURL: "https://mus-project01.firebaseio.com/",
});
export default instance;
