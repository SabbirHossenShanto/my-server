import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthProvide from './AuthProvider/AuthProvide.jsx'
import Users from './Components/Users.jsx'
const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:()=>fetch('http://localhost:5000/users')
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvide> <RouterProvider router={router}></RouterProvider></AuthProvide>
  </React.StrictMode>,
)
