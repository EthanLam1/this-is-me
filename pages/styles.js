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
  
export const Explanation = styled.div`
  margin-top: 30px;
  width: 80vw;
  text-align: left;

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
  92% {
    opacity: 0;
  }
  100% {
    opacity: 1; 
  }
`;

const flash = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1; 
  }
  100% {
    opacity: 0
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 800px) {
      align-items: center;
      padding-left: 50px; 
      padding-top: 50px; 
    @media screen and (min-width: 1400px) {
      align-items: end;
    }
  }
`;

export const AppearAnimation = styled.div`
  animation: ${appear} ${props => props.time? props.time : 0} ease-in-out 0s 1;
`;

export const ScrollContainer = styled.a`
  animation: 
  ${flash} 1s linear 0s infinite,
  ${appear} ${props => props.time? props.time : 0} ease-in-out 0s 1;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export default Main;
