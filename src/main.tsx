import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AuthContextProvider from './contexts/AuthContext.tsx'

createRoot(document.getElementById('root')!).render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
)
