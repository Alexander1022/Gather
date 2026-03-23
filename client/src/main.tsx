import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import RootLayout from './layouts/RootLayout'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RootLayout />
    </BrowserRouter>
  </StrictMode>,
)
