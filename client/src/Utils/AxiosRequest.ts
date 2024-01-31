import axios from 'axios';

const AxiosRequest = axios.create({
    baseURL: "http://localhost:8080/api/",    
});

export default AxiosRequest;
