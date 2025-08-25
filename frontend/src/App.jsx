import React from 'react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react' 
import { Routes, Route, Navigate } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import AuthPage from './pages/AuthPage.jsx'
import toast from 'react-hot-toast'
import * as Sentry from "@sentry/react";

const SentryRoutes = Sentry.withSentryReactRouterV7Routing(Routes);

const App = () => {

  return (
    <>
    <button onClick={() => {throw new Error("test")}}>
      Click me for Error
    </button>
      <SignedOut>
        <SentryRoutes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={<Navigate to="/auth" replace />} />
        </SentryRoutes>
      </SignedOut>

      <SignedIn>
        <SentryRoutes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<Navigate to="/" replace />} />
          </SentryRoutes >
      </SignedIn>
    </>
  )
}

export default App