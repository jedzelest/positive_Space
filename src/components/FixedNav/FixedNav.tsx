import styles from "./FixedNav.module.scss";

interface Props {
  first_option: string;
  second_option: string;
  third_option: string;
}

const FixedNav = ({ first_option, second_option, third_option }: Props) => {
  return (
    <div className={styles.nav_style}>
      <ul>
        <li>
          <a href="#">{first_option}</a>
        </li>
        <li>
          <a href="#">{second_option}</a>
        </li>
        <li>
          <a href="#" className={styles.active}>
            {third_option}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FixedNav;
