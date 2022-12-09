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
        <title>Sean | Full Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
      <About />
      <Skills />
      <Project />
      <Contact /> 
    </div>
  );
}
