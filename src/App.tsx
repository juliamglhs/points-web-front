import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ForgottenPassword from './pages/ForgottenPassword/ForgottenPassword';
import UnderConstruction from './pages/under-construction/UnderConstruction';
import Login from './pages/Login/Login';
import PasswordReset from './pages/PasswordReset/PasswordReset';
import SignUp from './pages/SignUp/SignUp';
import { Helmet } from 'react-helmet';
import ForgottenPasswordConfirmation from './pages/ForgottenPasswordConfirmation/ForgottenPasswordConfirmation';
import SignUpConfirmation from './pages/SignUpConfirmation/SignUpConfirmation';

const App: React.FC = () => {
  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@700;900&family=Lexend:wght@400;800;900&family=Red+Hat+Display:wght@700&display=swap" rel="stylesheet" />
      </Helmet>
        <Routes>
          <Route path="/" element={<UnderConstruction />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/signup" element={<SignUp />} />
          <Route path="/user/signup/confirmation" element={<SignUpConfirmation />} />
          <Route path="/user/forgotten-password/confirmation" element={<ForgottenPasswordConfirmation />} />
          <Route path="/user/forgotten-password" element={<ForgottenPassword />} />
          <Route path="/user/password-reset" element={<PasswordReset />} />
        </Routes>
    </>
  )
}

export default App;



