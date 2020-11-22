import { NavLink, Link } from "react-router-dom";
import classes from "./mobileNav.module.css";

const MobileNav = () => {
  return (
    <nav className={classes.nav}>
      <button type="button" className={classes.nav__link}>
        <i className="material-icons">menu</i>
        <div className={classes.dropdown}>
          <button type="button">Women</button>

          <div className={classes.dropdown__links}>
            <ul>
              <li>
                <Link to="/products/skirt">Skirt</Link>
              </li>
              <li>
                <Link to="/products/dress">Dresses</Link>
              </li>
              <li>
                <Link to="/products/knitewear">Knitewear</Link>
              </li>
            </ul>
          </div>

          <button type="button">Men</button>

          <div className={classes.dropdown__links}>
            <ul>
              <li>
                <Link to="/products/shirt">Shirts</Link>
              </li>
              <li>
                <Link to="/products/pants">Pants</Link>
              </li>
              <li>
                <Link to="/products/jacket">Jackets</Link>
              </li>
            </ul>
          </div>
        </div>
      </button>
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
  );
};

export default MobileNav;
