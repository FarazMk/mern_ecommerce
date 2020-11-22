import { NavLink, Link } from "react-router-dom";
import classes from "./mobileNav.module.css";

const MobileNav = () => {
  return (
    <nav className={classes.nav}>
      <Link type="button" className={classes.nav__link}>
        <i className="material-icons">menu</i>
        <ul className={classes.menu}>
          <div>
            <li>
              <Link to="">Women</Link>
              <ul>
                <li>
                  <Link to="/women/skirt">Skirts</Link>
                </li>
                <li>
                  <Link to="/women/dresses">Dresses</Link>
                </li>
                <li>
                  <Link to="/women/knitwear">Knitwear</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#">Men</Link>
              <ul>
                <li>
                  <Link to="/men/shirt">Shirts</Link>
                </li>
                <li>
                  <Link to="/men/pants">Pants</Link>
                </li>
                <li>
                  <Link to="/men/jacket">Jackets</Link>
                </li>
              </ul>
            </li>
          </div>
        </ul>
      </Link>
      <Link to="" className={classes.nav__link}>
        <i className="material-icons">search</i>
      </Link>
      <NavLink
        to="/cart"
        className={classes.nav__link}
        activeClassName={classes.active}
      >
        <span className="material-icons">shopping_bag</span>
      </NavLink>
      <Link
        to="/profile"
        className={classes.nav__link}
        activeClassName={classes.active}
      >
        <span className="material-icons">person_outline</span>
      </Link>
    </nav>
  );
};

export default MobileNav;
