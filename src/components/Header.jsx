import Nav from "./Nav";
import { usePageContext } from "../providers/PageProvider";

export default function Header() {
  const { menuOpen } = usePageContext();

  return (
    <>
      <header className="header">
        <div className="header__top">
          <div className="header__branding">
            <h1 className="header__title">alexGeerDev()</h1>
          </div>
          <Nav />
        </div>
      </header>
    </>
  );
}
