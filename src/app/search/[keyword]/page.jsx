"use client";
import TextTitle from "@/components/TextTitle";
import { fetchDataAnime } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Pagination from "@/components/Pagination";
import { useEffect, useState } from "react";
import Loading from "@/app/loading";

const Page = ({ params }) => {
  const { keyword } = params;
  const decodedKeyword = decodeURIComponent(keyword);
  const [page, setPage] = useState(1);
  const [dataAnime, setDataAnime] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const api = await fetchDataAnime("anime", `q=${keyword}&page=${page}`);
    setDataAnime(api);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [page]);
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <TextTitle text={`Search Anime ${decodedKeyword}`} />

          <AnimeList api={dataAnime} />

          <Pagination
            page={page}
            lastPage={dataAnime.pagination?.last_visible_page}
            setPage={setPage}
          />
        </>
      )}
    </div>
  );
};

export default Page;
