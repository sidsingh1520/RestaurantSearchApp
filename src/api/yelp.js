import axios from 'axios';
export default axios.create({
    baseURL:'Your API',
    headers:{
        Authorization: 'Bearer "Token"'
    }
});
