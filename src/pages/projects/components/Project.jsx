
export function Project(props) {
  return (
    <div className="single_project">
      <h3>{props.name}</h3>
      <a href={props.solution_link} target="_blank" className="project_img"><img src={props.img_link} alt={props.img_alt}></img></a>
      <div className="text_content">
        <section className="description">{props.description}</section>
        <div className="button_container">
          {props.buttons}
      </div>
      </div>
    </div>
  );
}
