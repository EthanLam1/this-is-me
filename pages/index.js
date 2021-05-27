import Link from "next/link";
import Home from "../components/Home";
import ProjectCard from "../components/ProjectCard";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

export default function Index() {
  return (
    <>
      <Home />
      <main>
        <header>
          <h1>Hi, I'm Aaron!</h1>
        </header>
        <div className={"container"}>
          <section>
            <h1>About Me</h1>
            <p>
              I am an Intensely passionate student, currently studying Computer
              Science and Linguistics at the University of Toronto. I work
              part-time as a backend engineer and am always tinkering and
              reading. I am passionate about software as the tool to build a
              better future.
            </p>

            <p>
              My main interests in school are in computational linguistics as
              well as languages and compilers. I am a Technical Officer in the
              Computer Science Student Community, helping students to bridge the
              gap between theory and implementation by mentoring them during the
              development process.
            </p>

            <p>
              Out of school, I have experience developing production software in
              teams small to large. I enjoy making small web projects as well as
              exploring many other areas of computer science. These range from
              language design, to physics simulations, to blockchain, and
              beyond. I have a love of all things food and cooking and I am
              always listening to or making music.
            </p>
          </section>

          <section className="right">
            <h1>My Projects</h1>
            <p>
              Whether for school or work, for a hackathon, or just for fun, I am
              constantly working on projects I find interesting. Here are just a
              few of my favorites.
            </p>
            <div className="cards">
              <ProjectCard proj={"lectern"} img={"logo.png"} />
            </div>
          </section>

          <section>
            <h1>Resume & Contact</h1>
            <p>Want a copy of my resume?</p>
            <button>
              <p style={{ margin: 0 }}>Download It! </p>
            </button>

            <p>You can find me online at the following places</p>
            <a href={"https://linkedin.com/in/aaroncgoidel"} target="_blank">
              <FaLinkedin size={35} />
            </a>
            <a href={"https://github.com/aaroncgoidel"} target="_blank">
              <FiGithub size={35} />
            </a>
          </section>
        </div>
      </main>
    </>
  );
}
