import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/FavoritesList"
            >
              Favourites List
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/Plan"
            >
              Itinerary Plan
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
