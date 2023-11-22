import axios from 'axios';
//api é minha instância
export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
})