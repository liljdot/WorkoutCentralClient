import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AuthContextProvider from './contexts/AuthContext.tsx'
import { CustomMUIThemeProvider } from './contexts/customMUIThemeContext.tsx'

createRoot(document.getElementById('root')!).render(
  <AuthContextProvider>
    <CustomMUIThemeProvider>
      <App />
    </CustomMUIThemeProvider>
  </AuthContextProvider>
)
