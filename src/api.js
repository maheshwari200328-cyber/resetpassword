import axios from 'axios';
const API=axios.create({
      baseURL:'http://localhost:5000/api',
})
export const registerUser=(userData)=>API.post('/register',userData);
export const loginUser=(userData)=>API.post('/login',userData);
export const forgotPassword=(email)=>API.post('/forgot-password',{email});
export const resetPassword=(token,password)=>API.post(`/reset-password/${token}`,{password})