import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/login/Login'
import Layout from './Layout'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Employee from './pages/employee/employee'

const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      <Route path="/layout" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile/>}/>
          <Route path="employee" element={<Employee/>}/>
          {/* other routes */}
      </Route>
    </Routes>
    </>
  )
}

export default App
