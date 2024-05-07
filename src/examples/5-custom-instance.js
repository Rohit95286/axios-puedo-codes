import { useEffect } from 'react';
import authFetch from './../axios/axiosInstance';
const CustomInstance = () => {
  const fetchData = async () => {
    try{
      let data = await authFetch('/posts');
      console.log(data , "data");
    }
    catch(e){
      console.log(e.response , "response");
    }
    
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;
