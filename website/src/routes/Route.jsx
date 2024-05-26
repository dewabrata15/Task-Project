import { createBrowserRouter, redirect } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage";
import Login from "../pages/Login";
import Register from "../pages/Register";

const mustLogin = () => {
  if(!localStorage.access_token) {
    return redirect('/login')
  }
  return null
}

const isLogin = () => {
  if(localStorage.access_token) {
    return redirect('/')
  }
  return null
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Homepage />,
        loader: mustLogin
      },
      {
        path: 'login',
        element: <Login />,
        loader: isLogin
      },
      {
        path: 'register',
        element: <Register />,
        loader: isLogin
      }
    ]
  }
])