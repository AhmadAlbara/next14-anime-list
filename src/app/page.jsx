import Hero from "@/components/Pages/Landing/Hero";
import Popular from "@/components/Pages/Landing/Popular";
import Recomendation from "@/components/Pages/Landing/Recomendation";
import SinggleAnime from "@/components/Pages/Landing/SinggleAnime";
import UpComing from "@/components/Pages/Landing/UpComing";
import React from "react";

const Page = () => {
  return (
    <section>
      <Hero />
      <Popular />
      <Recomendation />
      <SinggleAnime />
      <UpComing />
    </section>
  );
};

export default Page;
