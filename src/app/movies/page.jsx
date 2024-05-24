"use client";

import TextTitle from "@/components/TextTitle";
import { fetchDataAnime } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import { useEffect, useState } from "react";
import Pagination from "@/components/Pagination";
import Loading from "../loading";

const Page = () => {
  const [page, setPage] = useState(1);
  const [dataAnime, setDataAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const api = await fetchDataAnime(
      "top/anime",
      `type=movie&page=${page}&limit=24`
    );
    setDataAnime(api);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      {isLoading ? (
        <Loading /> // komponen Loading ditampilkan saat data sedang diambil
      ) : (
        <>
          <TextTitle text={"All Movies Anime"} />

          <AnimeList api={dataAnime} />

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
