import axios from 'axios';
import { AsyncStorage } from 'react-native';

// api that comes from ngrok. This is used to make a local server
// accessible anywhere online. We then relevant http verbs 
// 'post' 'get' etc from axios. 
const instance = axios.create({
    baseURL: 'http://9b362f37.ngrok.io'
})


// 

instance.interceptors.request.use(
    async config => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );
  
  export default instance;