import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContactForm from './q3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactForm />
  </StrictMode>,
)
