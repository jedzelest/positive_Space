import InformationBox from "../components/InformationBox/InformationBox";
import styles from "./layout.module.scss";
import {
  name,
  date_of_birth,
  email,
  phone,
  nationality,
} from "../components/InformationBox/InfoData";

const BiographyLayout = () => {
  return (
    <div className={styles.biography_style}>
      <h3>Biography</h3>
      <article>
        <InformationBox
          name={name}
          date_of_birth={date_of_birth}
          email={email}
          phone={phone}
          nationality={nationality}
        />
        <p className={styles.greet_paragraph}>
          <span>Hello!</span>
          {
            " I’m Jedzel Estrelloso, an inspiring web developer and a freelance digital illustrator dedicated in creating things that interests me. I graduated April of 2024 under Bachelor of Science in Information Technology.  I have been drawing since middle school or in Grade 7, I have a passion for bringing interesting characters to life. I love both ability to create websites and painting.  "
          }
        </p>
      </article>
    </div>
  );
};

export default BiographyLayout;
