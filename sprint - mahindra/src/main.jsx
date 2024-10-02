import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './routes/Home.jsx';
import Corridas from './routes/Corridas.jsx';
import Error from './routes/Error.jsx';

const router = createBrowserRouter([
  {
    path: '/', element: <App />,
    errorElement: <Error />,
    
    children: [
      { path: '/', element: <Home /> },
      { path: '/corridas', element: <Corridas /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
