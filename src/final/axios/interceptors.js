import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  // other configurations
})

axiosInstance.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  response => {
    return response
  },

  //  interceptor = a function for req config  and res error  --------------->  function (error)
  // if 401    --------------------------->            if (401 === error.response.status)
  // header change in axios instance  ---------------------> axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + responseofNewToken.
  // call again with  same data =================================>    axiosInstance(error.config)
  //  async operations catch  login page 

  
function (error) {
  if (401 === error.response.status) {
    // get Failed Request
    let failedRequestData = error.config;


  ///////let api cal, for renewUserToken() = "" .then [MOST IMP]  .catch(Go LOGIN)//////////////////////////////////////////////

    return renewUserToken()
    .then(response => {
        //////////////////token change if access token not failed/////////////////////////////////////////////////
      axiosInstance.defaults.headers['Authorization'] = 'Bearer ' + response.accessToken;

    

      //// Retry failed request with new access token//////////////////////////////////////////////////////////////
      return axiosInstance.request(failedRequestData);
    }).catch(err => {
      console.error('Access token renewal failed:', err);
      return Promise.reject(err); // Propagate the error further
    });
  

} else {
    return Promise.reject(error);
}  
}


  
  
)









export default axiosInstance