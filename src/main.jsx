import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from './layouts/HomeLayout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
  },
  {
    path: "/auth",
    element: <div>Auth</div>,
  },
  {
    path: "/news",
    element: <div>News</div>,
  },
  {
    path: "/*",
    element: <div>Error-404</div>,
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
