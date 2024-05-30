import Image from "next/image";
import Link from "next/link";
import React from "react";

const index = ({ api }) => {
  return (
    <div className="grid justify-center grid-cols-3 gap-2 mx-auto lg:gap-4 lg:grid-cols-6 md:grid-cols-4 md:gap-3">
      {api.data?.map((anime, index) => (
        <div key={index} className="relative h-44 w-28 md:w-48 md:h-72">
          <Link
            href={`/anime/${anime.mal_id}`}
            className="relative block w-full h-full overflow-hidden group"
          >
            <Image
              src={anime.images.jpg.large_image_url}
              priority
              fill
              unoptimized={true}
              sizes="20"
              alt={anime.title}
              className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />

            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100">
              <span className="px-3 text-xs font-bold text-center text-white md:text-lg">
                {anime.title}
              </span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default index;
