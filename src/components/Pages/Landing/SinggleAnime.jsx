import { fetchDataAnime } from "@/libs/api-libs";
import React from "react";
import { shuffleArray } from "@/utils/shuffleArray";

import Image from "next/image";
import Link from "next/link";
import { FaRegCirclePlay } from "react-icons/fa6";

const SinggleAnime = async () => {
  let api = await fetchDataAnime("top/anime", "filter=bypopularity&limit=10");
  const data = shuffleArray(api.data, 1);
  console.log(data);
  return (
    <>
      {data.data.map((anime) => (
        <div
          key={anime.mal_id}
          className="flex flex-col w-full gap-10 py-4 my-10 md:flex-row"
        >
          <div className="w-full md:w-1/2 lg:w-[50%] relative h-[500px]">
            <Image
              src={anime.images.jpg.large_image_url}
              priority
              fill
              sizes="20"
              alt={anime.title}
              className="object-cover w-full h-full rounded-lg "
            />
          </div>
          <div className="w-full h-auto">
            <h1 className="mb-5 text-3xl font-bold">{anime.title}</h1>
            <p className="mb-5 text-justify">
              {anime.synopsis.slice(0, 500)} ...
            </p>

            {anime.trailer.url ? (
              <Link href={anime.trailer.url} target="blank">
                <div className="hover:scale-110 transition-all duration-150 ease-in-out justify-star h-12 w-[200px] rounded-full bg-gradient-to-r from-color-quinary via-color-accent to-color-septenary p-1">
                  <div className="flex items-center justify-center w-full h-full gap-3 rounded-full bg-color-primary dark:bg-color-secondary ">
                    <FaRegCirclePlay className="text-lg" />
                    Watch Trailer
                  </div>
                </div>
              </Link>
            ) : null}
          </div>
        </div>
      ))}
    </>
  );
};

export default SinggleAnime;
