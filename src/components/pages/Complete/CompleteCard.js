import React from 'react';
import { HiArchiveBoxXMark } from 'react-icons/hi2';
import { Link } from 'react-router-dom';

const CompleteCard = ({task,handleDelete}) => {
    const {_id,date, message} = task
    console.log(task);
    return (
        <div>
           <article className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:shadow-sm w-1/2 mx-auto my-16">
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
							onClick={()=> handleDelete(_id)}
							className="btn ml-2 whitespace-nowrap rounded-full bg-red-500 px-3 py-2 text-xs text-white"
						>
							<HiArchiveBoxXMark className='text-2xl'/>
						</button>

						<Link
							to="/mytask"
							className="btn ml-2 whitespace-nowrap rounded-full bg-blue-400 px-3 py-2 text-xs text-white"
						>
							Uncomplete
						</Link>
					</div>
				</div>
			</article>
        </div>
    );
};

export default CompleteCard;