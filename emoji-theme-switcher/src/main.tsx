import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
import ThemeProvider from './context/theme-provider.tsx'
import { RouterProvider } from 'react-router-dom'
import { routing } from './routing.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={routing}/>
    </ThemeProvider>
  </StrictMode>,
)
