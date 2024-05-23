import TextTitle from "@/components/TextTitle";
import { nestedDataAnime } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Recomendation = async () => {
  let api = await nestedDataAnime("recommendations/anime", "entry");
  api = shuffleArray(api);
  api = { data: api.slice(0, Math.min(api.length, 12)) };

  return (
    <div>
      <TextTitle text={"Recomendation For You"} />
      <AnimeList api={api} />
    </div>
  );
};

export default Recomendation;
