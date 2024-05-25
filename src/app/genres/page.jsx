"use client";
import { useEffect, useState } from "react";
import { fetchDataAnime } from "@/libs/api-libs";
import Link from "next/link";
import Loading from "../loading";

const Page = () => {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchGenres = async () => {
      setIsLoading(true);
      try {
        const response = await fetchDataAnime("genres/anime");
        setGenres(response.data);
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
      setIsLoading(false);
    };

    fetchGenres();
  }, []);

  return (
    <div className="p-4">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {genres.map((genre) => (
              <li key={genre.name}>
                <Link
                  href={{
                    pathname: `genres/animes/`,
                    query: {
                      genreName: genre.name,
                      genreId: genre.mal_id,
                    },
                  }}
                  passHref
                >
                  <div className="flex items-center justify-between p-4 transition-transform border rounded-lg cursor-pointer border-color-secondary dark:border-color-primary hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-800">
                    <span className="text-lg font-medium ">{genre.name}</span>
                    <span className="text-sm ">{genre.count} anime</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Page;
