import { NavLink, useNavigate } from "react-router-dom"
import { resetPassword } from "../src/api";
import { useParams } from "react-router-dom";
import { useState } from "react";
import Message from '../components/message'
function ResetPassword() {
    const { token } = useParams();
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()


    //const[showpassword,setShowpassword]=useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await resetPassword(token, password);

            navigate('/message', { state: { message: res.data.message } });
        }
        catch (err) {
            navigate('/message', {
                state: { message: err.response?.data?.message || 'Somthing went wrong' }
            })




        }

    }
    return (
        <>
            <h1 className="mb-2 p-2 text-xl  poppins-semibold  text-center m-2 mt-5">Reset Password</h1>
            <div className="flex justify-center items-center h-screen ">
                <form onSubmit={handleSubmit} className="border-white border-1 flex flex-col m-3  p-10 rounded-xl bg-[#ad84c2] ">
                    <label className="mb-2 p-2 text-xl  poppins-semibold  ">Enter NewPassword :</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="enter your newpassword.." className="p-3 text-sm   w-100  rounded-xl m-3 border-1  outline-none  poppins-regular" />

                    <button type="submit" className="bg-[#9d3acf] p-3 rounded-xl font-semibold mt-2 cursor-pointer hover:bg-[#d6a3f0] text-white hover:text-black ring-white ring-1 ">Reset Password</button>

                </form>
              
            </div>

        </>


    )
}
export default ResetPassword;