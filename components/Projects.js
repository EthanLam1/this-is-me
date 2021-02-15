import globalStyles from "../styles/global.js";
import ProjectItem from "./ProjectItem.js";

const Projects = (props) => (
  <div ref={props.projRef} className="section">
    <div className="heading">
      <h1>My Projects</h1>
    </div>
    <div className="contents">
      <ProjectItem
        link={"https://devpost.com/software/simulating-galaxies"}
        img={"/thumbnails/galaxy.webp"}
        title={"Galaxy Simulator"}
        blurb={
          "An n-body simulation for visualizing galaxy formation. This physics simulation, written in pure C won me first prize at a UofT coding competition. You can check out more by clicking the thumbnail!"
        }
      />
      <ProjectItem
        link={"http://SafeSend.cf"}
        img={"/thumbnails/safesend.webp"}
        title={"SafeSend"}
        blurb={
          "A web app which applies two-factor-authentication and strong cryptography to securely send messages. Go try it out for yourself by clicking on the icon."
        }
      />
      <ProjectItem
        link={"https://github.com/AaronCGoidel/this-is-me"}
        img={"/thumbnails/personal.webp"}
        title={"My Portfolio"}
        blurb={
          "The static site generator for the very website you're looking at right now. I use this as a way to share my work and résumé with the world. You can check out the code for this site by clicking on the icon."
        }
      />
      <ProjectItem
        link={
          "https://drive.google.com/drive/folders/1JpVrGEM2hqNzd9Il-Zzz2dt9xaovrhcn?usp=sharing"
        }
        img={"/thumbnails/cookie.webp"}
        title={"Cookie"}
        blurb={
          "A better, smarter cookbook, which leverages graph theory algorithms to be more helpful in the kitchen. By dynamically merging recipes and by assessing the current state of the recipe, Cookie makes decisions to get meals cooked faster for the average home cook. You can see pictures of the app in action by clicking on the icon."
        }
      />
      <ProjectItem
        link={"http://fairuoft.com/"}
        img={"/thumbnails/fairuoft.webp"}
        title={"Fair UofT"}
        blurb={
          "A website to allow students to send email petitions directly to the deans across the University of Toronto to lobby for reduced fees during remote learning due to Covid-19. While running, hundreds of petitions were sent."
        }
      />
      <ProjectItem
        link={
          "https://drive.google.com/drive/folders/1Gdvn_wyBYTbZggAWvivI8bm8LvvkF5xm?usp=sharing"
        }
        img={"/thumbnails/registrar.webp"}
        title={"Registrar"}
        blurb={
          "A smart system for organizing my vinyl records. Registrar is a web app which scrapes the internet for information on any album, such as track lists and album covers. It implements custom search and sorting features so that I can browse my records on my phone. Click the icon for screenshots."
        }
      />
      <ProjectItem
        link={"https://github.com/AaronCGoidel/SlothLang"}
        img={"/thumbnails/sloth.png"}
        title={"SlothLang"}
        blurb={
          'SlothLang is an esoteric programming language I wrote to better understand the nature of programming languages. It has the simple, yet highly impractical syntax of repeating the word "sloth" many many times to specify instructions to the computer. Check out the code behind the project, as well as the documentation and some example programs by clicking on the icon.'
        }
      />
      <ProjectItem
        link={"https://lhd-2018.herokuapp.com/"}
        img={"/thumbnails/cards.webp"}
        title={"Cards Against, Together"}
        blurb={
          'A reimagined party game experience for the modern day. I took the famous game "Cards Against Humanity" and built a version for the web. Where mine differs is in the fact that the players all need to be together to play. By leveraging socket connections, each player uses their phone to join a room which is made on a host computer. The phones each act as the player\'s hand while the computer acts as the table, where all communal information is displayed. Click the icon to try it.'
        }
      />
      <ProjectItem
        link={"https://www.mka.org/student-life/publications/academy-news"}
        img={"/thumbnails/AN.webp"}
        title={"The Academy News"}
        blurb={
          "I spearheaded the project to bring my high school's newspaper into the 21st century as the publication's first web editor. Since I left the school, the project has gone largely unmaintained, however, you can visit the site by clicking on the icon."
        }
      />
    </div>
    <style jsx>{`
      .contents {
        margin-top: 0;
      }
    `}</style>
    <style jsx global>
      {globalStyles}
    </style>
  </div>
);

export default Projects;
