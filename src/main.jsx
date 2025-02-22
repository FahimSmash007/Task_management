import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Routers from './Routes/Routers'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import User_context_provider from './Context/User_context_provider'

const query_client = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={query_client}>
         <User_context_provider>

        <Routers></Routers>
         </User_context_provider>

      </QueryClientProvider>

    </BrowserRouter>
  </StrictMode>,
)
