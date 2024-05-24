import TextTitle from "@/components/TextTitle";
import { nestedDataAnime } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import { shuffleArray } from "@/utils/shuffleArray";

const Recomendation = async () => {
  let api = await nestedDataAnime("recommendations/anime", "entry");
  const data = shuffleArray(api, 12);
  return (
    <div>
      <TextTitle text={"Recomendation For You"} />
      <AnimeList api={data} />
    </div>
  );
};

export default Recomendation;
