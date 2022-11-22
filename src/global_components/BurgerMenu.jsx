import { useState } from "react";

function BurgerMenu() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const OpenCloseMenu = () => {
    setMenuIsOpen((oldState) => !oldState);
  };
  const menuClass = menuIsOpen ? "open" : "closed";

  return (
    <>
      <div className={menuClass}>
      <button onClick={OpenCloseMenu}>
      <div className={menuClass + " line"}></div>
        <div className={menuClass + " line"}></div>
        <div className={menuClass + " line"}></div>
      </button>
      </div>
    </>
  );
}

export default BurgerMenu;
