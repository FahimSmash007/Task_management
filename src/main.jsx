import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routers from './Routes/Routers'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routers></Routers>

    </BrowserRouter>
  </StrictMode>,
)
