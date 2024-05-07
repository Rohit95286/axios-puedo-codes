import { useEffect } from 'react';
import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/posts';

const fetchData= async () =>{
  try{
    const response = await axios(url);
    

    console.log(response?.data);
  }
  catch(e){
    console.log(e.response)
  }
}

const FirstRequest = () => {
  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>first request</h2>;
};
export default FirstRequest;
