import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/register";
import DefaultLayout from "../layouts/DefaultLayout.tsx";
import GuestLayout from "../layouts/GuestLayout.tsx";
import Home from "../pages/Home";
const router = createBrowserRouter([
    {
        path:'/',
        element:<GuestLayout/>,
        children:[
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/login',
                element:<Login/>
            },
        ]
    },
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[
            {
                path: '/home',
                element: <Home/>
            }
            ]
    }

])

export default router;