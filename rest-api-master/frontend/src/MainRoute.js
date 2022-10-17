import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/includes/authentications/LoginPage'
import SignupPage from './components/includes/authentications/SignupPage'
import PrivateRoute from './components/includes/routes/PrivateRoute'
import TodoLanding from './components/screens/TodoLanding'

function MainRoute() {
  return (

    <Routes>
      <Route path='/' element={<PrivateRoute />}>
        <Route path='/' element={<TodoLanding />} />
      </Route>
      <Route path='/user/login' element={<LoginPage />}  />
      <Route path='/user/signup' element={<SignupPage />}  />
    </Routes>
  )
}

export default MainRoute