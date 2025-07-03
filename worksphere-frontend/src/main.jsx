import { StrictMode } from 'react'
console.log('Google Client ID:', import.meta.env.VITE_APP_GOOGLE_AUTH_KEY);
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google';

const GOOGLE_CLIENT_ID = '696928690338-6j7h8v1fpn9orhpsdpg2mkn74m1v3kur.apps.googleusercontent.com';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_APP_GOOGLE_AUTH_KEY}>

      <BrowserRouter>
        <App />
      </BrowserRouter>

    </GoogleOAuthProvider>
  </StrictMode>,
)
