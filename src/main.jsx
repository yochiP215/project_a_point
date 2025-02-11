import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Providor } from 'react-redux'
import {store} from './app/store.js'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Providor store={store}>
      <App />
    </Providor>
  </StrictMode>,

)
