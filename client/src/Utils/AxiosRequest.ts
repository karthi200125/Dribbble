import axios from 'axios';

const AxiosRequest = axios.create({
    // baseURL: "http://localhost:8080/api/",    
    baseURL: "https://dribbblecloneserver.onrender.com/api/",    
});

export default AxiosRequest;
