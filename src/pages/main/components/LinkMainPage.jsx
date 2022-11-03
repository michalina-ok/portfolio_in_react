export function LinkMainPage(props) {
    return(
  <>
   <svg height="100" width="100">
  <circle cx="50" cy="75" r="20" stroke="black" stroke-width="3" fill="black" />
</svg> 
      <a href="#">{props.name}</a>
  </>
    );
  }