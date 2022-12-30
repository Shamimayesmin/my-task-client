import React from "react";
import { HiArchiveBoxXMark } from "react-icons/hi2";

const MediaCard = ({ med, handleDelete }) => {
	// console.log(med);
	const { image, message, date, _id } = med;
	return (
		<div>
			<article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
				<img alt="Office" src={image} className="h-56 w-full object-cover" />

				<div className="bg-white p-4 sm:p-6">
					<time dateTime="2022-10-10" className="block text-xs text-gray-500">
						{date}
					</time>

					<p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
						{message}
					</p>
          <div className=" flex justify-start items-start">
          <button
							onClick={()=> handleDelete(_id)}
							className="btn ml-2 whitespace-nowrap rounded-full bg-red-500 px-3 py-2 text-xs text-white"
						>
							<HiArchiveBoxXMark className='text-xl'/>
						</button>
          </div>
				</div>
        
			</article>
		</div>
	);
};

export default MediaCard;
