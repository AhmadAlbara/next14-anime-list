"use client";

import TextTitle from "@/components/TextTitle";
import { fetchDataAnime } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import Loading from "@/app/loading";

const Page = ({ searchParams: { genreId, genreName } }) => {
  const [page, setPage] = useState(1);
  const [dataAnime, setDataAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const api = await fetchDataAnime(
      "anime",
      `genres=${genreId}&order_by=popularity&page=${page}&limit=24`
    );
    setDataAnime(api);
    setIsLoading(false);
  };

  useEffect(() => {
    if (genreId) {
      fetchData();
    }
  }, [genreId, page]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <TextTitle text={genreName} /> <AnimeList api={dataAnime} />
          {dataAnime.pagination && (
            <Pagination
              page={page}
              lastPage={dataAnime.pagination?.last_visible_page}
              setPage={setPage}
            />
          )}
        </>
      )}
    </div>
  );
};

export default Page;
