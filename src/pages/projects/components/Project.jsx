export function Project(props) {
    return(
  <section className="project">
      <img src={props.img_link} alt={props.img_alt}></img>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
  </section>
    );
  }
  