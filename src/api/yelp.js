import axios from 'axios';
export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer yn79mE6xZcHzSe6I07h4nN_eDLysGstSKWZ6_0JDB-QLz8ODM6d_ohu_PBgoMibNMh8wHTh0GoL0OYLlKLsZURPg9pDMKdVq37e0Dm6HY_LEJhbTXG0l8VmQK0hKYHYx'
    }
});
