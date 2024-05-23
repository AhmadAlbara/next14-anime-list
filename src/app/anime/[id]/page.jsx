import { fetchDataAnime } from "@/libs/api-libs";
import Link from "next/link";
import { FaRegCirclePlay } from "react-icons/fa6";

const Page = async ({ params: { id } }) => {
  const api = await fetchDataAnime(`anime/${id}`);

  return (
    <div className="flex flex-wrap items-start justify-center">
      <div className="w-full p-2 md:w-1/2 lg:w-[20%]">
        <img
          src={api.data.images.jpg.large_image_url}
          alt={api.data.title}
          className="mx-auto rounded-lg h-[350px]"
        />
      </div>
      <div className="w-full p-2 md:w-1/2 lg:w-[50%] mt-2">
        <h2 className="mb-4 text-2xl font-bold md:text-4xl">
          {api.data.title}
        </h2>
        <div className="flex flex-wrap items-center gap-2 mb-10">
          <p>{api.data.rating}</p>
          <div className="w-[5px] h-[5px] rounded-full bg-color-primary/50 dark:bg-color-primary/50 "></div>
          <p>{api.data.type}</p>
          <div className="w-[5px] h-[5px]  rounded-full bg-color-primary/50 dark:bg-color-primary/50 "></div>
          <p>Eps {api.data.episodes}</p>
          <div className="w-[5px] h-[5px]  rounded-full bg-color-primary/50 dark:bg-color-primary/50 "></div>
          <p>{api.data.duration}</p>
        </div>

        <div className="w-2 mb-5">
          {api.data.trailer.url ? (
            <Link href={api.data.trailer.url} target="blank">
              <div className="hover:scale-110 transition-all duration-150 ease-in-out justify-star h-12 w-[200px] rounded-full bg-gradient-to-r from-color-quinary via-color-accent to-color-septenary p-1">
                <div className="flex items-center justify-center w-full h-full gap-3 rounded-full bg-color-primary dark:bg-color-secondary ">
                  <FaRegCirclePlay className="text-lg" />
                  Watch Trailer
                </div>
              </div>
            </Link>
          ) : null}
        </div>
        <p className="text-justify">{api.data.synopsis}</p>
      </div>
      <div className="w-full p-2 md:w-1/2 lg:w-[30%]">
        <div className="rounded-lg md:p-4 md:shadow-xl bg-color-primary dark:bg-color-secondary">
          <p className="mb-2 text-lg font-semibold">Details</p>
          <p>Japanese Title: {api.data.title_japanese}</p>
          <p>Aired: {api.data.aired.string}</p>
          <p>Status: {api.data.status}</p>
          <p>Ranked: {api.data.rank}</p>
          <p>Popularity: {api.data.popularity}</p>
          <p>Members: {api.data.members}</p>
          <p>Favorites: {api.data.favorites}</p>
          <p>Genres: {api.data.genres.map((genre) => genre.name).join(", ")}</p>
          <p>Themes: {api.data.themes.map((theme) => theme.name).join(", ")}</p>
          <Link
            href={api.data.url}
            target="_blank"
            className="block mt-4 text-color-accent hover:underline"
          >
            More details on MyAnimeList
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
