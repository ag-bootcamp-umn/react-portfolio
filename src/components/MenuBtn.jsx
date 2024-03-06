import { Nav } from "./Nav";

export default function MenuBtn() {
  return (
    <>
      <Nav currentPage={props.currentPage} isChecked={isChecked} />
      <div className="hamburger">
        <h4 className="hamburger__title">MENU</h4>
        <input
          type="checkbox"
          className="hamburger__checkbox"
          id="nav-toggle"
          checked={isChecked}
          onChange={checkHandler}
        />
        <label
          htmlFor="nav-toggle"
          className="hamburger__button hamburger__button--corner"
        >
          <span className="hamburger__icon">&nbsp;</span>
        </label>
      </div>
    </>
  );
}
