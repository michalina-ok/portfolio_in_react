import { useState } from "react";
import "./App.scss";
import ProjectsPage from "./pages/projects/ProjectsPage";
import MainPage from "./pages/main/MainPage";
import About from "./pages/about/About";
import BurgerMenu from "./global_components/BurgerMenu";

function App() {
  const [page, setPage] = useState("MainPage");

  const pages = {
    MainPage: <MainPage />,
    ProjectsPage: <ProjectsPage />,
    About: <About />,
  };

  return (
    <div className="App">
      <header>
        <a href="#" onClick={() => setPage("MainPage")}>
          <h1>Michalina Oniszczuk</h1>
        </a>
        <BurgerMenu />
      </header>
      <nav>
        <a href="#" onClick={() => setPage("MainPage")}>
          Home
        </a>
        <a href="#" onClick={() => setPage("ProjectsPage")}>
          Projects
        </a>
        <a href="#" onClick={() => setPage("About")}>
          About
        </a>
      </nav>

      {pages[page]}
    </div>
  );
}

export default App;
