import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://analytics.cxp-integration.trustyou.com',
    timeout: 10000,
});

export default instance;