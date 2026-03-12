import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <Toaster position="top-right" toastOptions={{
        style: {
          background: '#0F172A',
          color: '#fff',
          borderRadius: '12px',
          border: '1px solid rgba(99,102,241,0.3)',
        },
        success: { iconTheme: { primary: '#22C55E', secondary: '#fff' } },
        error: { iconTheme: { primary: '#EF4444', secondary: '#fff' } },
      }} />
    </BrowserRouter>
  </StrictMode>,
)
