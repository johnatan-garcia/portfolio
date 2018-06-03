import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://kaz-portfolio.firebaseio.com/'
});

export default instance;