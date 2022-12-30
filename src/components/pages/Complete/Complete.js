import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

import CompleteCard from "./CompleteCard";

const Complete = () => {

    const [loading, setLoading] = useState(true);
    const [tasks, setTask] = useState([]);
	useEffect(() => {
		fetch("https://my-task-server-eta.vercel.app/myTask")
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
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
	// const [complete, setComplete] = useState([]);
	const handleDelete = (id) => {
		fetch(`https://my-task-server-eta.vercel.app/completed/${id}`, {
			method: "DELETE",
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				if (data.deletedCount > 0) {
					toast.success("deleted successfully");
					const remaining = tasks.filter((ta) => ta._id !== id);
					setTask(remaining);
				}
			});
	};

	return (
		<div>

            {
                tasks.map((task)=> <CompleteCard key={task._id} task={task}
                handleDelete={handleDelete}
                ></CompleteCard>)
            }
			{/* <article className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm w-1/2 mx-auto my-16">
				<div className="rounded-[10px] bg-base-100 text-neutral p-4 sm:p-6">
					<time dateTime="2022-10-10" className="block text-xs text-gray-500">
						{date}
					</time>

					<div className="flex">
						<h3 className="mt-0.5 text-lg font-medium line-through">
							{message}
						</h3>
					</div>

					<div className="mt-4 flex flex-wrap gap-3">
						<button
							onClick={() => handleDelete(_id)}
							className="btn ml-2 whitespace-nowrap rounded-full bg-red-500 px-3 py-2 text-xs text-white"
						>
							Delete
						</button>

						<Link
							to="/mytask"
							className="btn ml-2 whitespace-nowrap rounded-full bg-blue-400 px-3 py-2 text-xs text-white"
						>
							Uncomplete
						</Link>
					</div>
				</div>
			</article> */}
		</div>
	);
};

export default Complete;
