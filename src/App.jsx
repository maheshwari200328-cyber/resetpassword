import ForgotPassword from '../components/forgotPassword';
import ResetPassword from '../components/resetPassword';
//import Link from '../components/SendLink'
import './App.css'
import Message from '../components/message';
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<ForgotPassword/> }/>
          <Route path='/reset-password/:token' element={<ResetPassword/> }/>
          <Route path="/message" element={<Message />} />


        
      </Routes>
         </BrowserRouter>
     

    </div>

     
    
  )
}

export default App
