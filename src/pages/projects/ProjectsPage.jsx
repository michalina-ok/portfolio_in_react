import React from 'react'
import { Project } from "./components/Project"

function ProjectsPage() {
  return (
         <div className="layout_projects">
        <h3>Projects</h3>
      <Project name="Gerner Jahncke" description="Lorem Ipsum" img_url="" img_alt=""  />
      <Project />
      </div>
  )
}

export default ProjectsPage