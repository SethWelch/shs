import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/shs-logo-header.png";
import { COMPANY_NAME, navLinks } from "../data/content";
import { ArrowIcon, CloseIcon, MenuIcon } from "./Icons";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" && !hash : to === `${pathname}${hash}` || to === pathname;

  return (
    <header className="site-header">
      <div className="wrap nav">
        <Link className="brand" to="/" aria-label={`${COMPANY_NAME} home`}>
          <img className="logo" src={logo} alt={COMPANY_NAME} />
        </Link>
        <nav className="links" aria-label="Primary">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={[isActive(l.to) ? "active" : "", l.hideMd ? "hide-md" : ""].join(" ").trim()}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link className="btn btn-gold" to="/contact">
          Contact Us<ArrowIcon />
        </Link>
        <button
          type="button"
          className="menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      <nav id="mobile-nav" className={`mobile-nav${open ? " open" : ""}`} aria-label="Mobile">
        <div className="wrap">
          <ul>
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="btn btn-gold" to="/contact" onClick={() => setOpen(false)}>
            Contact Us<ArrowIcon />
          </Link>
        </div>
      </nav>
    </header>
  );
}
