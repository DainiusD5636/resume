import "./index.css";

function Header({ children, fullName, position }) {
  return (
    <header>
      <div className="Header-top"></div>
      <div className="Header-name">
        <h1>{fullName}</h1>
        <div className="Header-programmer">
          <h3 className="Font--white">{position}</h3>
        </div>
      </div>
    </header>
  );
}

export default Header;
