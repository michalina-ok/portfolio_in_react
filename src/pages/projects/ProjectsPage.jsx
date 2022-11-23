import React from "react";
import { Project } from "./components/Project";
import Button from "./components/Button";

function ProjectsPage() {
  return (
    <div className="projects">

      <Project
        name="Gerner Jahncke"
        description="Gerner Jahncke was a final 2nd semester project done collaboratively in a 4-people team. We conducted user research and created a website design and social media strategy for an independent ceramics studio based in Bornholm. The website was also developed using HTML, CSS and JavaScript."
        img_link="/gerner_jahncke.webp"
        img_alt="Screenshot of a website. The header says 'Gerner Jahncke'. The background picture presents vases and glasses on a table. There are four categories a user can choose - our products, our process, contact anmd comissions."
        buttons={[
          <Button text="Prototype" url="http://gareth.dk/portfolio/Assets/Projects/gernerJahncke/index.html" />,
          <Button text="Wireframes" url="https://www.figma.com/file/mYugfqtYu10stAhTM1FXTX/visual%2Fwireframes%2Fprototypes?node-id=67%3A2" />,
        ]}
      />
      <Project
        name="Hogwart assignment"
        description="Hogwart assignment was a final project of a 5 week long theme called 'Just JavaScript'. The goal of the assignment was to create a database of Hogwart students, display information about them and let the user perform some actions e.x.
      add students to the prefect team or to the inquisitorial squad. Not my proudest design but hey, I learnt a lot about JavaScript. "
        img_link="/hogwart_assignment.webp"
        img_alt="Screenshot of a website. In the foreground there is a card containing data about a selected student: his name, picture and information about his status"
        buttons={[
        <Button text="Website" url="https://michalina-ok.github.io/hogwart_assignment/" />, 
        <Button text="Code on GitHub" url="https://github.com/michalina-ok/hogwart_assignment" />]}
      />
      <Project
        name="Alternative portfolio"
        description="Previous version of this page. Built before I have started learning React so it's based on vanilla JavaScript, HTML and Sass. Still minimal yet a bit more playful design including a geometrical header."
        img_link="/alternative_portfolio.webp"
        img_alt="Screenshot of a website. On one side there is a vertical header with three categories: projects, about, contact and a circle on top with them with 'Michalina Oniszczuk' written inside it. Centrally there is text saying: 'Hi. My name is Michalina and I design and develop stuff. I am currently looking for a 10-week internship within the field of creative development and product design' and a text saying 'See my projects'."
        buttons={[
        <Button text="Project" url="https" />, 
        <Button text="Code on GitHub" url="https://github.com/michalina-ok/portfolio_javascript" />]}
      />
    </div>
  );
}

export default ProjectsPage;
