import axios from "axios";
import React, { useEffect, useState } from "react";
import MediaCard from "./MediaCard";

const Media = () => {
	const [media, setMedia] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch("https://my-task-server-eta.vercel.app/addTask")
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setMedia(data);
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

	return (
		<div>
			<div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 my-16">
				{media?.map((med, i) => (
					<MediaCard key={med._id} med={med}></MediaCard>
				))}
			</div>
		</div>
	);
};

export default Media;
