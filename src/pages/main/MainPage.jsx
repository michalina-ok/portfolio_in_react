import React from "react";
import { useState } from 'react'
import { LinkMainPage } from "../main/components/LinkMainPage";
import ProjectsPage from "../projects/ProjectsPage"
import About from "../about/About"


function MainPage() {
  const [page, setPage] = useState("MainPage");


  const pages = {
    MainPage: <MainPage />,
    ProjectsPage: <ProjectsPage />,
    About: <About />
  }

  return (
    <div className="layout_main">
      <div className="hero_text">
        <h2>Hi. My name is Michalina and I am studying Multimedia Design at KEA.</h2>
        <h3>I am currently searching for a 10-week full-time internship in the digital field.</h3>
        <a href="mailto:michalina.oniszczuk@gmail.com?subject=Quick%20question" className="email">
          michalina.oniszczuk@gmail.com
        </a>
      </div>
    </div>
  );
}

export default MainPage;
