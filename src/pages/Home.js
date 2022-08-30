import React from "react";
import AdSense from "react-adsense";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
// import Certifications from "../components/Certifications";

export default function Home() {
  return (
    <div>
      <Header />
      <Experience />
      <Projects />
      {/* <Certifications /> */}
      <Skills />
      <Education />
      <AdSense.Google client="ca-pub-4297282347356771" slot="1797494644" />
    </div>
  );
}
