import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globeStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  BtnContainer,
  HeroBtn,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="./assets/hero.mp4" autoPlay muted />
      <Container>
        <MainHeading>Your data is secure with us</MainHeading>
        <HeroText>
          We provide the best security systems for clients all over the world.
        </HeroText>
        <BtnContainer>
          <Link to="signup">
            <Button>Register</Button>
          </Link>
          <HeroBtn>Find More</HeroBtn>
        </BtnContainer>
      </Container>
    </HeroSection>
  );
};

export default Hero;
