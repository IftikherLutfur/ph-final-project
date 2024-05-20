import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <div className='mx-w-screen-xl mx-auto'>
    <RouterProvider router={router}></RouterProvider>
    </div>
    </HelmetProvider>
  </React.StrictMode>,
)
