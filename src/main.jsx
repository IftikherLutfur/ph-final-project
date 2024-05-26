import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes';
import { HelmetProvider } from 'react-helmet-async';
import AuthPRovider from './Components/AuthProvider/AuthPRovider';

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <AuthPRovider>
    <div className='mx-w-screen-xl mx-auto'>
    <RouterProvider router={router}></RouterProvider>
    </div>
    </AuthPRovider>
    </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
