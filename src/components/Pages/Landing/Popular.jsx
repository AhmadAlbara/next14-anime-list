import TextTitle from "@/components/TextTitle";
import { fetchDataAnime } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";

const Popular = async () => {
  const api = await fetchDataAnime("top/anime", "filter=favorite&limit=6");
  return (
    <div>
      <TextTitle
        text={"Most Popular"}
        href={"/popular"}
        linkText={"View More"}
      />

      <AnimeList api={api} />
    </div>
  );
};

export default Popular;
