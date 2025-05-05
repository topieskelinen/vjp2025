import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styleComponents/index.css'
import App from './App.jsx'

import 'leaflet/dist/leaflet.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
