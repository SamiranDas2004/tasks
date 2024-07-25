
import { Route,Routes } from 'react-router-dom'
import CoustomRoutes from './routes/CoustomRoutes'
import OtpForm from './components/otpPage/OtpForm'
function App() {


  return (
    <>
   <Routes>
    <Route path='/*' element={<CoustomRoutes/>}/>

   </Routes>
    </>
  )
}

export default App
