import AddTask from "../components/pages/AddTask/AddTask";
import Complete from "../components/pages/Complete/Complete";
import Login from "../components/pages/Login/Login";
import MyTask from "../components/pages/MyTask/MyTask";
import Register from "../components/pages/Register/Register";
import Main from "../Layout/Main";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/login',
                element: <Login></Login>
                
            },
            {
                path : '/register',
                element: <Register></Register>
                
            },
            {
                path : '/add',
                element: <AddTask></AddTask>   
            },
            {
                path : '/mytask',
                element: <MyTask></MyTask>   
            },
            {
                path : '/complete',
                element: <Complete></Complete>  
            },
        ]
    }
])

export default router