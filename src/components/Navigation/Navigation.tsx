import styles from "./Navigation.module.scss";

interface Props {
  logo: string;
  isLoggedIn: boolean;
  navList?: {
    id: number;
    icon: string;
  }[];
}

const Navigation = ({ logo, isLoggedIn, navList }: Props) => {
  return (
    <>
      {isLoggedIn && (
        <nav className={styles.navigation_style}>
          <a href="#">
            <img src={logo} alt="icon-image" />
          </a>
          <ul className={styles.navListItems}>
            {navList?.map((nav) => (
              <div key={nav.id}>
                <li>
                  <a href="#">
                    <img src={nav.icon} alt="nav-icon-image" />
                  </a>
                </li>
              </div>
            ))}
          </ul>
          <img
            src="/assets/hamburger.png"
            alt=""
            className={styles.hamburger_menu_icon}
          />
        </nav>
      )}
      <div className={styles.mobile_menu}>
        <ul>
          {navList?.map((nav) => (
            <li key={nav.id}>
              <a href="">
                <img src={nav.icon} alt="nav-icon-image" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
