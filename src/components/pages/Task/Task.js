import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Task = () => {
	const navigate = useNavigate();
	const handleSubmit = (event) => {
		event.preventDefault();

		const form = event.target;
		const date = new Date();
		const message = form.message.value;
		console.log(message);

		const task = {
			message,
			date,
		};
		console.log(task);

		fetch(" https://my-task-server-eta.vercel.app/myTask", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(task),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.acknowledged) {
					toast.success("Task added successfully");
					form.reset();
					navigate("/mytask");
				}
			})
			.catch((err) => console.error(err));
	};
	return (
		<div className="my-16">
			<h2 className="text-center text-3xl text-bold">Todo List</h2>
			<form
				onSubmit={handleSubmit}
				className="w-1/3 mx-auto text-black flex gap-2 mt-10"
			>
				<label className="sr-only" htmlFor="message">
					Enter Task
				</label>
				<input
					className="w-full rounded-md border-gray-500 text-sm border"
					placeholder="Enter Task"
					rows="8"
					id="message"
					name="message"
				></input>
				<input
					className="btn bg-teal-600 text-white p-4 rounded-md justify-center items-center"
					type="submit"
					value="add"
				/>
			</form>
		</div>
	);
};

export default Task;
