import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function NavBar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles["nav-list"]}>
          <li className={styles["nav-item"]}>
            <NavLink
              to="/"
              className={`${styles["active-link"]} ${styles.upload}`}
            >
              File Upload
            </NavLink>
          </li>
          <li className={`${styles["nav-item"]} ${styles["hide-mobile"]}`}>
            <NavLink to="/search-by-id">Search by ID</NavLink>
          </li>
          <li className={`${styles["nav-item"]} ${styles["hide-mobile"]}`}>
            <NavLink to="/search-two-ids">Search by Two IDs</NavLink>
          </li>
          <li className={`${styles["nav-item"]} ${styles["hide-mobile"]}`}>
            <NavLink to="/search-by-project">Search by Project ID</NavLink>
          </li>
          <li className={styles["nav-item"]}>
            <NavLink
              to="/"
              className={`${styles["active-link"]} ${styles.employees}`}
            >
              Employees
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
