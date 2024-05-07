import { useState } from 'react';
import axios from 'axios';
const url = 'https://reqres.in/api/users';

const PostRequest = () => {
  const [password, setpassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const res = await axios.post(url , {email , password},{

        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
        

      }
        

      )

      console.log(res.data , "response");
    }
    catch(error){
      console.log(error.response , "error")
    }
  };

  return (
    <section>
      <h2 className='text-center'>post request</h2>
      <form className='form' onSubmit={handleSubmit}>
        
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            password
          </label>
          <input
            type='text'
            className='form-input'
            id='password'
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-block'>
          login
        </button>
      </form>
    </section>
  );
};
export default PostRequest;
