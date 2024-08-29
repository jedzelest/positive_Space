import styles from "./Image.module.scss";

interface Props {
  variant: "primary" | "secondary";
  details: {
    id: number;
    title: string;
    link: string;
    year: string;
  }[];
}

const Image = ({ variant }: Props) => {
  return (
    <>
      {variant === "primary" ? (
        <section className={styles.primary_style}>
          <div className={styles.primary_div}>
            <img src="/assets/Jastine_Tattoo.jpg" alt="Artwork-image" />
            <section>
              <h6>Chaos</h6>
              <p>2024</p>
            </section>
          </div>
        </section>
      ) : (
        <section className={styles.secondary_style}>
          <section className={styles.image_section}>
            <div>
              <img src="/assets/Jastine_Tattoo.jpg" alt="Artwork-image" />
            </div>
            <h6>Chaos</h6>
            <p>2024</p>
          </section>
        </section>
      )}
    </>
  );
};

export default Image;
