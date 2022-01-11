import styled from "styled-components";
import { Button } from "../../globeStyles";

export const HeroSection = styled.section`
  min-height: 0vh;
  height: 100vh;
  background: center/cover;
  padding-top: 30vh;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
`;

export const HeroVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  top: 0;
  position: absolute;
  z-index: -1;
`;

export const HeroText = styled.p`
  min-height: 0vh;
  margin-bottom: 35px;
  font-size: clamp(1rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
  padding: 0 2rem;
`;

export const HeroBtn = styled.button`
  border: none;
  color: #fff;
  background: transparent;
  border-radius: 8px;
  padding: 0.5rem 0.8rem;
  font-size: 1rem;
  font-weight: 300;
  margin-top: 1rem;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
