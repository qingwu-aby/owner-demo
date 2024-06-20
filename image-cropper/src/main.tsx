/*
 * @Author: yangyuan
 * @Description: 
 * @Date: 2024-06-20 14:42:04
 * @LastEditTime: 2024-06-20 20:40:01
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
