import React from 'react';
import { Link } from 'react-router-dom';
import { HiArchiveBoxXMark, IconName,HiPencil } from "react-icons/hi2";

const MytaskCard = ({item,handleDelete}) => {
    // console.log(item);
    const {date, message, _id} = item
    return (
       <div>
		 <article className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm w-1/2 mx-auto my-16">
			<div className="rounded-[10px] bg-base-100 text-neutral p-4 sm:p-6">
				<time dateTime="2022-10-10" className="block text-xs text-gray-500">
					{date}
				</time>

				<a href="/">
					<h3 className="mt-0.5 text-lg font-medium">
						{message}
					</h3>
				</a>

				<div className="mt-4 flex flex-wrap gap-3">
					<button onClick={() => handleDelete(_id)} className='btn ml-2 whitespace-nowrap rounded-full bg-red-500 px-3 py-2 text-xs text-white'><HiArchiveBoxXMark className='text-2xl'/></button>
					
                    <Link to={`/edit/${_id}`} className="btn ml-2 whitespace-nowrap rounded-full bg-teal-600 px-3 py-2 text-xs text-white"><HiPencil className="text-2xl"/>
					</Link>

                    {/* <Link to={`/completed/${_id}`} className="btn ml-2 whitespace-nowrap rounded-full bg-teal-600 px-3 py-2 text-xs text-white">Completed</Link> */}
					
					
				</div>
			</div>
		</article>

		
	   </div>
    );
};

export default MytaskCard;