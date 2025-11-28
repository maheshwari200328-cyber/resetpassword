import axios from 'axios';
const API=axios.create({
      baseURL:'http://localhost:5000/api',
})
export const registerUser=(userData)=>API.post('/register',userData);
export const loginUser=(userData)=>API.post('/login',userData);
export const forgotPassword=(email)=>API.post('https://resetpasswordbackend.onrender.com/api/forgot-password',{email});
export const resetPassword=(token,password)=>API.post(`https://resetpasswordbackend.onrender.com/api/reset-password/${token}`,{password})