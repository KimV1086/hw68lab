import axios from 'axios';

const axiosOrders = axios.create({
  baseURL: 'https://mynotes-f717c.firebaseio.com/'
});


export default axiosOrders;
