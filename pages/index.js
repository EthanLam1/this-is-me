import Head from "next/head";
import Image from 'next/image'
import { useEffect, useRef, useState } from "react";
import Typist from "react-typist"
import HeroButton from "../components/HeroButton";
import Modal from "../components/Modal";
import Projects from "../components/Projects";
import About from "../components/About";
import { Main, Emphasis, Buttons, Intro, Explanation, ImageContainer, ScrollContainer, AppearAnimation} from "./styles";



export default function Home() {
  const [modalState, setModalState] = useState(0);
  const [profileWidth, setProfileWidth] = useState(400)

  
  useEffect(() => {
    function handleResize() {
      setProfileWidth(Math.max(innerWidth*0.30, innerHeight*0.30));
    }

    window.addEventListener('resize', handleResize);
    window.addEventListener('load', handleResize);
    return () => window.removeEventListener('resize load', handleResize);
  }, []);


  const pages = [null, <About />, <Projects />];
  return (
    <div>
      <Head>
        <title>Date Ethan </title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Main>
        <Intro>
          <Typist
            avgTypingDelay={35}
            stdTypingDelay={7}
            cursor={{
              show: false
            }}
          >
            <h1>👋 Hey!</h1>
            <Typist.Delay ms={300}/>
            <h4>My name's <Emphasis color_num={1}>Ethan</Emphasis>, <Typist.Delay ms={700}/> but I guess if you're here you probably already knew that.</h4>
          
            <Typist.Delay ms={300}/>
            <h4>Anyway, welcome to my <Emphasis>dating website</Emphasis>! I think it's pretty cool. </h4>
          </Typist>
          <AppearAnimation time={"7.9s"}>
            <ImageContainer>
              <Image src={"/ethanlam.png"} width={profileWidth} height={profileWidth/0.89} layout={"fixed"}/>
            </ImageContainer>
          </AppearAnimation>
          {/* working with images in next is the fucking worst */}
        </Intro>
        <Explanation id="explanation">
          <ScrollContainer time={"8.7s"} href="#explanation">
            <Image src={"/scroll.png"} width={100} height={30}/>
          </ScrollContainer>
         <Typist
            avgTypingDelay={35}
            stdTypingDelay={7}
            cursor={{
              show: false
            }}
            >
            <Typist.Delay ms={10000}/>
            <h4>Okay. So here's how this is gonna work. I'm gonna show you a profile, and if you like him, <Emphasis>swipe right</Emphasis> →</h4>
            <Typist.Delay ms={600}/>
            <h4>If you don't, no big deal, we have <Emphasis>tons</Emphasis> of options for you to pick from. Just <Emphasis>swipe left</Emphasis> ← and we'll show you someone new, no problem!</h4>
            <Typist.Delay ms={600}/>
            <h4>I think that's about it. <Emphasis>Happy swiping!</Emphasis></h4>

          </Typist>
        </Explanation>
        <AppearAnimation time={"22s"}>
          <Projects></Projects>
        </AppearAnimation>
      </Main>
    </div>
  );
}
