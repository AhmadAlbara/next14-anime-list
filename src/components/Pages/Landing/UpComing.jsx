import TextTitle from "@/components/TextTitle";
import { fetchDataAnime } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";

const UpComing = async () => {
  const api = await fetchDataAnime("top/anime", "filter=upcoming&limit=6");
  return (
    <div>
      <TextTitle text={"Upcoming"} href={"/upcoming"} linkText={"View More"} />

      <AnimeList api={api} />
    </div>
  );
};

export default UpComing;
