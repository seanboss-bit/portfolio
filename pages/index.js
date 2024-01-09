import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";

import Project from "../components/Project";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abubakar | Full Stack Developer</title>
        <meta name="description" content="Abubakar | Full Stack Developer" />
        <link rel="icon" href="./images/A.png" />
      </Head>

      <Main />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}
