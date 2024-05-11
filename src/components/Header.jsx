import Nav from "./Nav";
import { usePageContext } from "../providers/PageProvider";
import { Link } from "react-router-dom";

export default function Header() {
  const { menuOpen } = usePageContext();

  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="header__branding">
            {/* <Link to="/">
              <h1 className="header__title">alexGeerDev()</h1>
            </Link> */}
          </div>
          <Nav />
        </div>
      </header>
    </>
  );
}
