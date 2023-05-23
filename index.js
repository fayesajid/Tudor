import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Contact from './pages/Contact';
import Register from './pages/Register';
import HomeLogo from './components/HomeLogo';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Contact",
    element: <Contact/>,
  },
  {
    path: "Register",
    element: <Register/>,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "HomeLogo",
    element: <HomeLogo/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
  );

