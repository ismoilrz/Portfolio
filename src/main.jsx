import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import app from './app'
import { BrowserRouter } from 'react-router-dom'
import App from './app/app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
