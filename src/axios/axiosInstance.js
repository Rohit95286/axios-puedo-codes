
import axios from "axios";

const authFetch = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers:{
        Accept:"application/json"
    }
  });

  export default authFetch;