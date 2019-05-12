import axios from 'axios';

export const register = newUser => {
   console.log("registering");

   return axios
      .post('users/register', {
         first_name: newUser.first_name,
         last_name: newUser.last_name,
         email: newUser.email,
         password: newUser.password
      })
      .then(res => {
         console.log("Registered")
      })
}

export const login = user => {
   console.log("logging in");
   return axios
      .post('users/login', {
         email: user.email,
         password: user.password
      })
      .then(res => {
         localStorage.setItem('usertoken', res.data)
         return res.data
      })
      .catch(err => {
         console.log(err)
      })
}
