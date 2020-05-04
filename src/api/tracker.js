import axios from 'axios';

// api that comes from ngrok. This is used to make a local server
// accessible anywhere online. We then relevant http verbs 
// 'post' 'get' etc from axios. 

export default axios.create({
    baseURL: 'http://cacd96a3.ngrok.io'
})


