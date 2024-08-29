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

const Image = ({ variant, details }: Props) => {
  return (
    <>
      {variant === "primary" ? (
        <section className={styles.primary_style}>
          {details.map((artwork) => (
            <div className={styles.primary_div} key={artwork.id}>
              <img src={artwork.link} alt="Artwork-image" loading="lazy" />
              <section>
                <h6>{artwork.title}</h6>
                <p>{artwork.year}</p>
              </section>
            </div>
          ))}
        </section>
      ) : (
        <section className={styles.secondary_style}>
          {details.map((artwork) => (
            <section className={styles.image_section} key={artwork.id}>
              <div>
                <img src={artwork.link} alt="Artwork-image" loading="lazy" />
              </div>
              <h6>{artwork.title}</h6>
              <p>{artwork.year}</p>
            </section>
          ))}
        </section>
      )}
    </>
  );
};

export default Image;
