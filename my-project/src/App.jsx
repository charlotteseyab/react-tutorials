
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register/register';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import RiderPage from './pages/riderDashboard';
import DriverPage from './pages/driverDashboard';



function App() {
  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <RootLayout />,
    //   children: [
    //     {
    //       index: true,
    //       element: <Home />
    //     },
    //    { path: "login", element: <Login />},
    //    {path: "register", element: <Register/>},

    //   ]
    // }

    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LoginPage/>
    },
    {
      path: "/register",
      element: <RegisterPage/>
    },
    {
      path: "/riderDashboard",
      element: <RiderPage/>
    },
    {
      path: "/driverDashboard",
      element: <DriverPage/>
    },
    
   


  ])
  return (
    <div>
     <RouterProvider router={router} />
    </div>
  );
}

export default App;