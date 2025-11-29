import axios from 'axios';
const API=axios.create({
      baseURL:'https://resetpasswordbackend.onrender.com/api',
})
export const registerUser=(userData)=>API.post('/register',userData);
export const loginUser=(userData)=>API.post('/login',userData);
export const forgotPassword=(email)=>API.post('/forgotpassword',{email});
export const resetPassword=(token,password)=>API.post(`/resetpassword/${token}`,{password})