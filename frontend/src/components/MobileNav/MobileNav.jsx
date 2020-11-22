import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import cn from "classnames";
import classes from "./mobileNav.module.css";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.container}>
      <div className={classes.hamburger} onClick={() => setIsOpen(!isOpen)}>
        <div className={classes.line1}></div>
        <div className={classes.line2}></div>
        <div className={classes.line3}></div>
      </div>
      <ul
        className={
          isOpen
            ? cn(classes.nav__items, classes.nav__items__open)
            : classes.nav__items
        }
      >
        <li>
          <button>Men</button>
        </li>
        <li>
          <button>Women</button>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>

      <nav className={classes.nav}>
        <button type="button" className={classes.nav__link}>
          <i className="material-icons">search</i>
        </button>
        <NavLink
          to="/cart"
          className={classes.nav__link}
          activeClassName={classes.active}
        >
          <span className="material-icons">shopping_bag</span>
        </NavLink>
        <Link to="/profile" className={classes.nav__link}>
          <span className="material-icons">person_outline</span>
        </Link>
      </nav>
    </div>
  );
};

export default MobileNav;
