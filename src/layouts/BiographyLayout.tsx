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
      <article className={styles.first_layout}>
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
      <article className={styles.second_layout}>
        <section className={styles.skills_section}>
          <div>
            <img src="/assets/star.png" alt="" />
            <h6>Main Skills</h6>
          </div>
          <ul>
            <li>Digital Painting</li>
            <li>Web Development</li>
            <li>Concept Art</li>
            <li>Character Design</li>
            <li>Color Theory</li>
            <li>Adobe Photoshop</li>
            <li>UI/UX Design</li>
          </ul>
        </section>
        <section className={styles.images_section}>
          <div className={styles.image_div}>
            <img src="/assets/Estrelloso_1.jpg" alt="Graduation Pic 1" />
          </div>
          <div className={styles.image_div}>
            <img src="/assets/Estrelloso_2.jpg" alt="Graduation Pic 2" />
          </div>
        </section>
      </article>
    </div>
  );
};

export default BiographyLayout;
