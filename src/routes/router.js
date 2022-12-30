import AddTask from "../components/pages/AddTask/AddTask";
import Complete from "../components/pages/Complete/Complete";
import Login from "../components/pages/Login/Login";
import Media from "../components/pages/Media/Media";
import EditTask from "../components/pages/MyTask/EditTask";
import MyTask from "../components/pages/MyTask/MyTask";
import Register from "../components/pages/Register/Register";
import Task from "../components/pages/Task/Task";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Task></Task>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/add",
				element: (
					<PrivateRoute>
						<AddTask></AddTask>{" "}
					</PrivateRoute>
				),
			},
			{
				path: "/mytask",
				element: (
					<PrivateRoute>
						<MyTask></MyTask>
					</PrivateRoute>
				),
			},
			// {
			// 	path: "/completed/:id",
			// 	element: <Complete></Complete>,
			// 	loader: ({ params }) =>
			// 		fetch(`https://my-task-server-eta.vercel.app/completed/${params.id}`),
			// },
			{
				path: "/completed",
				element: <Complete></Complete>,
				
			},
			{
				path: "/media",
				element: <Media></Media>,
			},
			{
				path: "/edit/:id",
				loader: ({ params }) =>
					fetch(`https://my-task-server-eta.vercel.app/edit/${params.id}`),
				element: <EditTask></EditTask>,
			},
		],
	},
]);

export default router;
