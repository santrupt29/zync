import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react' 
import { Routes, Route, Navigate } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import AuthPage from './pages/AuthPage.jsx'

const App = () => {
  return (
    <>
      <SignedOut>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </Routes>
      </SignedOut>

      <SignedIn>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Navigate to="/" replace />} />
          </Routes >
      </SignedIn>
    </>
  )
}

export default App