import React, { useState, useEffect } from "react";
import { FaBars, FaRegistered } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./style.scss";

const data = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about" },
  { label: "SKILLS", to: "/skills" },
  { label: "RESUME", to: "/resume.pdf", download: true },
  { label: "PORTFOLIO", to: "/portfolio" },
  { label: "CONTACT ME", to: "/contact" },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => setToggleIcon(!toggleIcon);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = toggleIcon ? "hidden" : "auto";
  }, [toggleIcon]);

  const handleLinkClick = () => setToggleIcon(false);

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__container__logo">
          <FaRegistered size={30} />
        </Link>

        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              {item.download ? (
                <a
                  href={item.to}
                  download="Rudradeb_Das_Resume.pdf"
                  className="navbar__container__menu__item__links"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  to={item.to}
                  className="navbar__container__menu__item__links"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

