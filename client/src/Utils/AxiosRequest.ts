import axios from 'axios';

const AxiosRequest = axios.create({
    baseURL: "https://dribbblecloneserver.onrender.com/api/", 
});

export default AxiosRequest;
