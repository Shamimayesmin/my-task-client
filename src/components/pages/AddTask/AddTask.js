import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useFormAction, useNavigate } from 'react-router-dom';

const AddTask = () => {

    const navigate = useNavigate()
   
    const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
    const imagehostkey = process.env.REACT_APP_IMGBB_KEY;
    const handleAddTask = (data) => {
		console.log(data);
        const date = new Date();
		const image = data.image[0];
		const formData = new FormData();
		formData.append("image", image);
		const url = `https://api.imgbb.com/1/upload?key=${imagehostkey}`;
		console.log(url);
		fetch(url, {
			method: "POST",
			body: formData,
		})
			.then((res) => res.json())
			.then((imgData) => {
				if (imgData.success) {
					console.log(imgData.data.url);
					const product = {
						
						date,
						message: data.message,
						image: imgData.data.url,
					};

					console.log(product);
					// save doctor information to the database
					fetch(" http://localhost:5000/addTask", {
						method: "POST",
						headers: {
							"content-type": "application/json",
							
						},
						body: JSON.stringify(product),
					})
						.then((res) => res.json())
						.then((result) => {
							console.log(result);
							toast.success(`message is added successfully`);
							navigate("/media");
						});
				}
			});
	};

   

    return (
        <div className='my-12'>
           <form onSubmit={handleSubmit(handleAddTask)} action="" className="mt-6 mb-0 space-y-4 rounded-lg p-10 shadow-2xl h-full w-1/2 mx-auto text-neutral">
					

					<div>
						<label htmlFor="image" className="text-sm font-medium">
							Chose file
						</label>

						<div className="relative mt-1 rounded-xl">
							<input
                                {...register("image", { required: "photo is required" })}
								type="file"
							
								className="w-full rounded-xl border-gray-200 p-4 pr-12 text-sm shadow-sm"
								
							/>

							
						</div>
					</div>

					<div>
						<label htmlFor="message" className="text-sm font-medium">
							Message
						</label>

						<div className="relative mt-1">
							<textarea
                            {...register("message", { required: "Message is required" })}
							type='text'	
							className="w-full rounded-lg border-gray-500 p-4 pr-12 text-sm shadow-sm border"
							placeholder="message"
							/>

							
						</div>
					</div>

					<button
						type="submit"
						className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
					>
						Submit
					</button>

					{/* <p className="text-center text-sm text-gray-500">
						No account?
						<Link className="underline" to='/register'>
							Sign up
						</Link>
					</p> */}
				</form>
        </div>
    );
};

export default AddTask;