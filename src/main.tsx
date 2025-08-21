import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Template from './template.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Template>
      <App />
    </Template>
  </StrictMode>,
)
