import axios from './axios';
import common from './common';

const axiosInstance = axios.create({
    baseURL: common().getUrl(),
  });
  
  export {
    axiosInstance as axios
  };