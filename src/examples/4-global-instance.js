import { useEffect } from 'react';
import './../axios/globalAxios';
import axios from 'axios';
const productsUrl = 'https://jsonplaceholder.typicode.com/posts';
const randomUserUrl = 'https://randomuser.me/api';

const GlobalInstance = () => {
  const fetchData = async () => {
    try{
      let data = await axios(productsUrl);
      console.log(data?.data);
      const response = await axios(randomUserUrl);
      console.log(response?.data)
    }
    catch(e){
      console.log(e.response , "response");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>global instance</h2>;
};
export default GlobalInstance;
