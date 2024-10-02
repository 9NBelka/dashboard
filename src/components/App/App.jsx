import { Route, Routes } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import HomePage from '../../pages/HomePage/HomePage'
// import PaymentsPage from '../../pages/PaymentsPage/PaymentsPage'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'
import LoginPage from '../../pages/LogInPage/LogInPage'
import RegisterPage from '../../pages/RegisterPage/RegisterPage'


function App() {
  

  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        {/* <Route path="/payments" element={<PaymentsPage />}/> */}
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/register" element={<RegisterPage />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  )
}

export default App
