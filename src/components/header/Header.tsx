import { useRef, useState, useEffect } from "react";
import Logo from "../../img/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  const headerRef = useRef<HTMLHeadElement>(null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (headerRef.current) {
        if (prevScrollPos > currentScrollPos) {
          setShowHeader(true);
        } else {
          setShowHeader(false);
        }
        setPrevScrollPos(currentScrollPos);
      }
    };
  }, [prevScrollPos]);

  return (
    <header ref={headerRef} className={`header ${showHeader ? "show" : ""}`}>
      <div className="container-nav">
        <Link to='/'>
        <img src={Logo} alt="Logo"  />
        </Link>
        <ul>
          <Link to="/">
          <li>
            MENU
          </li>
          </Link>
          <Link to="/cafe">
          <li>
            CAFÉ
          </li>
          </Link>
          <Link to="/experiencias">
          <li>
            EXPERIENCIAS STARBUCKS
          </li>
          </Link>
        </ul>
      </div>
      <div className="localizar-local">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
        <h3>
          <a href="">LOCALIZAR TIENDA</a>
        </h3>
      </div>
    </header>
  );
}

export default Header;
