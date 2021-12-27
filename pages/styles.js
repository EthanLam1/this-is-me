import styled, { keyframes } from "styled-components";
import colors from "../components/colors";
import Image from 'next/image';

export const Main = styled.main`
  font-family: "Poppins", sans-serif;
  width: 100vw;

  background-color: ${colors.main};
  color: ${colors.dark};

  display: flex;
  flex-direction: column;
  align-items: center;
  `;
  
export const Intro = styled.div`
  width: 80vw;
  text-align: left;
  @media screen and (min-width: 800px) {
    display: flex;
    
  }
`
export const Emphasis = styled.span`
  color: ${colors.accent}
`;

export const Buttons = styled.div`
  margin: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const appear = keyframes`
  0% {
    opacity: 0;
  }
  96% {
    opacity: 0;
  }
  100% {
    opacity: 1; 
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  animation: ${appear} 7.5s ease-in-out 0s 1;
  @media screen and (min-width: 800px) {
      align-items: center;
      padding-left: 50px; 
      padding-top: 50px; 
    @media screen and (min-width: 1400px) {
      align-items: end;
    }
  }
`;

export default Main;
