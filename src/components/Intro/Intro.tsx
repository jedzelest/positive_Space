import Button from "../Button/Button";
import styles from "./Intro.module.scss";

interface Props {
  primary_image: string;
  image_name_prop?: string;
  paragraph: string;
  author: string;
  links: {
    id: number;
    image_link: string;
  };
}

const Intro = () => {
  const buttonClick = () => {
    console.log("Button Clicked");
  };
  return (
    <header className={styles.intro_header}>
      <div className={styles.text_intro}>
        <h1 className={styles.heading_text}>
          Hi, I'm <img src="src/assets/jedzelest.png" alt="name-image" />
        </h1>
        <p>
          "Illustrations can be a big window: a looking glass into the author's
          imagination."
          <span className={styles.author_name}>by Emma Lesley</span>
        </p>

        <Button
          context="Download CV"
          onClick={buttonClick}
          icon="src/assets/download_CV.png"
        />
      </div>
      <div className={styles.image_intro}>
        <img
          src="src/assets/Black_WhiteJiezel.png"
          alt="header-image"
          className={styles.main_image}
        />
        <ul>
          <li>
            <a href="#">
              <img src="src/assets/artstation.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="src/assets/instagram.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="src/assets/linkedin.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Intro;
