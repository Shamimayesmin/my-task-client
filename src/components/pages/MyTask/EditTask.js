import React from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditTask = () => {
	const editTask = useLoaderData();
	console.log(editTask);
	const { _id, message } = editTask;
    const navigate = useNavigate();
	const handleUpdateTask = (event) => {
		event.preventDefault();
		const updatedTask = event.target.message.value;

		fetch(` http://localhost:5000/edit/${_id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ updatedTask }),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.matchedCount > 0) {
					toast.success("Task updated");
					event.target.reset();
					navigate("/mytask");
				}
			});
	};
	return (
		<div className="my-16">
            <h2 className="text-center">Task {message}</h2>
			<form onSubmit={handleUpdateTask} className="w-1/2 mx-auto mt-3 text-black">
				<label className="sr-only" htmlFor="message">
					Message
				</label>
				<textarea
					className="w-full rounded-lg border-gray-500 text-sm border"
					placeholder="Message"
					rows="8"
					id="message"
					name="message"
				></textarea>
				<input
					className="btn mt-4 mb-7 bg-teal-600 text-white p-3 rounded-xl justify-center items-center"
					type="submit"
					value="Save change"
				/>
			</form>
		</div>
	);
};

export default EditTask;
