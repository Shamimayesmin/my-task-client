import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import MytaskCard from "./MytaskCard";

const MyTask = () => {

    const [loading, setLoading] = useState(true);
	const [task, setTask] = useState([]);
	useEffect(() => {
		fetch("http://localhost:5000/myTask")
			.then((res) => res.json())
			.then((data) => {
                // console.log(data);
				setTask(data)
				setLoading(false)
			});
	}, [setLoading]);

    if (loading) {
        return <div className='flex items-center'><div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin border-red-400"></div></div>
    }

    const handleDelete = (id) => {
		const procced = window.confirm("Do you want to delete this review");
		if (procced) {
			fetch(`http://localhost:5000/myTask/${id}`, {
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
            {
                task.map((item)=><MytaskCard key={item._id}
                item={item}
                handleDelete={handleDelete}
                ></MytaskCard>)
            }
        </div>
		
	);
};

export default MyTask;
