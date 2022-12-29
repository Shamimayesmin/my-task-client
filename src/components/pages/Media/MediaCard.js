import React from 'react';

const MediaCard = ({med}) => {
    // console.log(med);
    const {image,message,date} = med
    return (
        <div>
            <article  className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
        <img
          alt="Office"
          src={image}
          className="h-56 w-full object-cover"
        />
      
        <div className="bg-white p-4 sm:p-6">
          <time dateTime="2022-10-10" className="block text-xs text-gray-500">
           {date}
          </time>
      
         
      
          <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
            {message}
          </p>
        </div>
      </article>
        </div>
    );
};

export default MediaCard;