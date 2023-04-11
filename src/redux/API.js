import axios from "axios";
// import AsyncStorage from '@react-native-community/async-storage';
import { API_BASE } from "../config";

const API = axios.create({
  baseURL: API_BASE,
  withToken: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Set JSON Web Token in Client to be included in all calls
export const setClientToken = token => {
  API.interceptors.request.use(function(config) {
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default API;
