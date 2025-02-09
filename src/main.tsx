import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AuthContextProvider from './contexts/AuthContext.tsx'
import { ThemeProvider } from '@emotion/react'
import { theme } from './data/index.ts'

createRoot(document.getElementById('root')!).render(
  <AuthContextProvider>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </AuthContextProvider>
)
