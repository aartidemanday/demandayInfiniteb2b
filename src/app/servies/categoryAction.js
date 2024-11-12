import axios from 'axios';
import { setTopCategory } from '../slices/categorySlice';

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX1ZFTkRPUiJdLCJzdWIiOiJ0ZXN0QDEyMy5jb20iLCJpYXQiOjE3MzA5NjEyODAsImV4cCI6MTczMTMyMTI4MH0.bcze5N1hRj0xKaTPvKAzQxnu2RKu9RzOJLkzHB0YRjG6_CnX6KknjzJRIG_kxVxkYCdEk36AIbR5fB8N62HHaA'
const config = {
  headers: {
    'Authorization': `Bearer ${token}`
  }
};

export const fetchCategories = (url) => async (dispatch) => {

    try {
      const res = await axios.get("http://141.136.35.203:8080/api/category",config)
      dispatch(setTopCategory(res.data.data))
    } catch (error) {
        console.log("error",error)
    }
};