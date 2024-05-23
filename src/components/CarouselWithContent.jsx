"use client";

import { Carousel, Typography, Button } from "@material-tailwind/react";

export function CarouselWithContent() {
  // Buat array objek anime
  const animeData = [
    {
      title: "One Piece",
      synopsis:
        "One Piece is the story of a boy named Monkey D. Luffy who dreams of becoming the Pirate King and finding the legendary treasure known as the One Piece. Luffy becomes a rubber human after eating a Devil Fruit that grants him that power, and he, along with his eclectic pirate crew, embarks on an adventure across the Grand Line, a dangerous sea where the treasure is believed to be located.",
      image: "/img/one-piece.jpg",
    },
    {
      title: "Naruto",
      synopsis:
        "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. However, Naruto carries within him a powerful creature called the Nine-Tailed Fox, which caused destruction and chaos in his village, Konohagakure, when he was just a baby. As a result, he is ostracized by many in the village.",
      image: "/img/naruto.jpg",
    },
    {
      title: "Dragon Ball",
      synopsis:
        "Dragon Ball is a Japanese manga series written and illustrated by Akira Toriyama. It follows the adventures of Goku, a young martial artist with a monkey tail and superhuman strength, as he explores the world in search of the seven orbs known as Dragon Balls. When gathered together, these Dragon Balls summon the wish-granting dragon, Shenron.",
      image: "/img/dragon-ball.jpg",
    },
    // Tambahkan lebih banyak data anime di sini jika diperlukan
  ];

  return (
    <Carousel
      className="rounded-xl"
      autoplay={true}
      loop={true}
      autoplayDelay={5000}
    >
      {animeData.map((anime, index) => (
        <div className="relative w-full h-[500px]" key={index}>
          <img
            src={anime.image}
            alt={anime.title}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 grid w-full h-full place-items-center bg-black/75">
            <div className="w-3/4 px-3 md:px-0 md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                {anime.title}
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                {anime.synopsis.slice(0, 200)}
                {anime.synopsis.length > 200 && " ..."}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
