
export function Project(props) {
  return (
    <div className="single_project">
      <h3>{props.name}</h3>
      <img src={props.img_link} alt={props.img_alt}></img>
      <div className="text_content">
        <section className="description">{props.description}</section>
        <div className="button_container">
          {props.buttons}
      </div>
      </div>
    </div>
  );
}
