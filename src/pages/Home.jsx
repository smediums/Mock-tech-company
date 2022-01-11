import React from "react";
import { Content } from "../components/content/Content";
import Features from "../components/features/Features";
import Hero from "../components/hero/Hero";
import { heroOne, heroTwo, heroThree } from "../data/HeroData";

//hero Carousel

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Content {...heroOne} />
      <Content {...heroTwo} />
      <Content {...heroThree} />
    </>
  );
};

export default Home;
