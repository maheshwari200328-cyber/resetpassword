import { useLocation } from "react-router-dom"
function Message(){
const location=useLocation();
const message=location.state?.message

    return(
        <>
       <div className="p-10 text-center  items-center ">
     <p className="mt-4 text-xl font-semibold">{message}</p>
    </div>

        </>
    )
}
export default Message