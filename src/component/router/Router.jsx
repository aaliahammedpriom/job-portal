import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../home/Home';
import Register from '../auth/Register';
import SignIn from '../auth/SignIn';

const Router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        errorElement: <h2>Route not foud</h2>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/signin',
                element: <SignIn></SignIn>
            },
        ]
    }
])


export default Router;