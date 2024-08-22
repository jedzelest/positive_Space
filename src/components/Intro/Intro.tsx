import Button from "../Button/Button";
import styles from "./Intro.module.scss";

interface Props {
  primary_image: string;
  paragraph: string;
  openingText: string;
  author: string;
  onButtonClick?: () => void;
  links: {
    id: number;
    redirect: string;
    image_link: string;
  }[];
}

const Intro = ({
  primary_image,
  openingText,
  onButtonClick,
  paragraph,
  author,
  links,
}: Props) => {
  return (
    <header className={styles.intro_header}>
      <div className={styles.text_intro}>
        <h1 className={styles.heading_text}>
          <span className={styles.typing_text}>{openingText}</span>
        </h1>
        <p>
          {paragraph}
          <span className={styles.author_name}>by {author}</span>
        </p>

        <Button
          context="Download CV"
          onClick={onButtonClick}
          icon="assets/download_CV.png"
        />
      </div>
      <div className={styles.image_intro}>
        <div className={styles.image_container}>
          <img
            src={primary_image}
            alt="header-image"
            className={styles.main_image}
          />
        </div>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.redirect} target="_blank">
                <img src={link.image_link} alt="" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Intro;
