import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import MytaskCard from "./MytaskCard";

const MyTask = () => {
	const [loading, setLoading] = useState(true);
	const [task, setTask] = useState([]);
	useEffect(() => {
		fetch("https://my-task-server-eta.vercel.app/myTask")
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setTask(data);
				setLoading(false);
			});
	}, [setLoading]);

	if (loading) {
		return (
			<div className="flex items-center">
				<div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-400"></div>
			</div>
		);
	}

	const handleDelete = (id) => {
		const procced = window.confirm("Do you want to delete this review");
		if (procced) {
			fetch(`https://my-task-server-eta.vercel.app/myTask/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((data) => {
					// console.log(data);
					if (data.deletedCount > 0) {
						toast.success("deleted successfully");
						const remaining = task.filter((ta) => ta._id !== id);
						setTask(remaining);
					}
				});
		}
	};

	return (
		<div>
			<div>
			{task.map((item) => (
				<MytaskCard
					key={item._id}
					item={item}
					handleDelete={handleDelete}
				></MytaskCard>
			))}
		</div>
		<div className=" flex justify-center items-center mx-auto">
		<Link to='/completed' className="btn ml-2 whitespace-nowrap rounded-full bg-teal-600 px-3 py-2 text-xs text-white">Completed</Link>
		</div>
		</div>
	);
};

export default MyTask;
