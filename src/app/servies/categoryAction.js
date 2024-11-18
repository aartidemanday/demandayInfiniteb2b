import axios from 'axios';
import { setTopCategory } from '../slices/categorySlice';

const token = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlcyI6WyJST0xFX1ZFTkRPUiJdLCJzdWIiOiJzdWZpeWFuLmluYW1kYXJAZGVtYW5kYXkuaW5mbyIsImlhdCI6MTczMTY3MjE2OSwiZXhwIjoxNzMyMDMyMTY5fQ.O4c9G3wpkepnQkM8AbUbdeKRdGpxI6-qmUUBk19Pmz2PilIKu-vjyD6LS1un-B36UWFEnkonANJOOdvSAK23_A'
const config = {
  headers: {
    'Authorization': `Bearer ${token}`
  }
};

export const fetchCategories = (dispatch,callback) => async () => {

    try {
      const res = await axios.get("http://infiniteb2b.com:8080/api/category",config)
      callback(res.data.data)
      dispatch(setTopCategory(res.data.data))
    } catch (error) {
        console.log("error",error)
    }
};
export const fetchCategoriesByLetter = (letter,callback) => async () => {
    try {
      const res = await axios.get(`http://infiniteb2b.com:8080/api/category?filter=${letter}`,config)
      return callback(res.data.data)
    } catch (error) {
        console.log("error",error)
    }
};
export const searchCategories = (searchQuery,callback) => async () => {
    try {
      const res = await axios.get(`http://infiniteb2b.com:8080/api/category?name=${searchQuery}`,config)
      return callback(res.data.data)
    } catch (error) {
        console.log("error",error)
    }
};
