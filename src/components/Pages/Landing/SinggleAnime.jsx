import Image from "next/image";
import Link from "next/link";
import { FaRegCirclePlay } from "react-icons/fa6";

const SinggleAnime = () => {
  const animeData = [
    {
      title: "One Punch Man 3",
      synopsis:
        "In One Punch Man Season 3, the story continues to follow Saitama, who has become so powerful that he can defeat any opponent with a single punch. This season focuses on the Monster Association arc, a major storyline from the manga.The season begins with the Hero Association planning a raid on the Monster Association's hideout to rescue a hostage, a child of a Hero Association executive. The S-class heroes, including Saitama and his disciple Genos, prepare for this mission. Meanwhile, Garou, a former hero hunter who was captured by the Monster Association, wakes up in their lair, setting the stage for intense confrontations​",
      image: "/img/opm.jpg",
      trailer: "https://www.youtube.com/watch?v=h71d0QyZqRE",
    },
  ];

  // Access the first element of the animeData array
  const anime = animeData[0];

  return (
    <div className="flex flex-col w-full gap-10 py-4 my-10 md:flex-row">
      <div className="w-full md:w-[60%] relative md:h-[500px]">
        <Image
          src={anime.image}
          priority
          fill
          sizes="20"
          alt={anime.title}
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="w-full h-auto md:w-[40%]">
        <h1 className="mb-5 text-3xl font-bold">{anime.title}</h1>
        <p className="mb-5 text-justify">{anime.synopsis.slice(0, 500)} ...</p>

        {anime.trailer ? (
          <Link href={anime.trailer} target="_blank">
            <div className="hover:scale-110 transition-all duration-150 ease-in-out justify-start h-12 w-[200px] rounded-full bg-gradient-to-r from-color-quinary via-color-accent to-color-septenary p-1">
              <div className="flex items-center justify-center w-full h-full gap-3 rounded-full bg-color-primary dark:bg-color-secondary">
                <FaRegCirclePlay className="text-lg" />
                Watch Trailer
              </div>
            </div>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default SinggleAnime;
