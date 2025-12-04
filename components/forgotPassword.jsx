 import { Link, NavLink,Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { forgotPassword } from "../src/api";
import Message from '../components/message'
function ForgotPassword() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate=useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await forgotPassword(email)
            setMessage(res.data.message)
           navigate('/message', {
    state: { message: res.data.message }
});
  console.log("ResetPassword Page Loaded");


        }
        catch (err) {
            navigate('/message',{
                state:{message:err.response?.data?.message || 'Error'
}

            })

        }

    }


    return (
        <>
            <h1 className="mt-7  grid place-items-center text-2xl  kanit-semibold ">Forgot Password</h1>
            <div className=" mt-3 justify-center items-center grid h-screen">
                <form onSubmit={handleSubmit} className="border-white border-1 flex flex-col  m-3  p-10 rounded-xl bg-[#ad84c2] ">
                    <label className="mb-2 p-2 text-xl  poppins-semibold  ">Enter Your Email :</label>
                    <input type="email" placeholder="enter your email.." value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 text-sm   w-100  rounded-xl m-3 border-1  outline-none  poppins-regular" />


                    <button type="submit"  className="bg-[#9d3acf] p-3 rounded-xl font-semibold mt-2 cursor-pointer hover:bg-[#d6a3f0] text-white hover:text-black ring-white ring-1 text-center items-center justify-center  w-30">send reset link</button>
            
                </form>
                <Message message={message} />
               

               
            </div>
        </>
    )
}
export default ForgotPassword;