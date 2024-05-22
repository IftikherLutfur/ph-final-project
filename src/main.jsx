import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthPRovider from './Components/AuthProvider/AuthPRovider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthPRovider>
    <div className='mx-w-screen-xl mx-auto'>
    <RouterProvider router={router}></RouterProvider>
    </div>
    </AuthPRovider>
    </HelmetProvider>
  </React.StrictMode>,
)
