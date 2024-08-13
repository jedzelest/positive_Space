import Button from "../Button/Button";
import styles from "./Intro.module.scss";

interface Props {
  primary_image: string;
  image_name_prop?: string;
  paragraph: string;
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
  image_name_prop,
  onButtonClick,
  paragraph,
  author,
  links,
}: Props) => {
  return (
    <header className={styles.intro_header}>
      <div className={styles.text_intro}>
        <h1 className={styles.heading_text}>
          <span className={styles.typing_text}>Hi, I'm</span>
          {image_name_prop && (
            <img src="src/assets/jedzelest.png" alt="name-image" />
          )}
        </h1>
        <p>
          {paragraph}
          <span className={styles.author_name}>by {author}</span>
        </p>

        <Button
          context="Download CV"
          onClick={onButtonClick}
          icon="src/assets/download_CV.png"
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
