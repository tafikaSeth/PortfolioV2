import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from "@vercel/analytics/react"
import './index.css'
import App from './App.tsx'
import "../i18n.ts"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <App />
      <Analytics />
  </StrictMode>,
)
