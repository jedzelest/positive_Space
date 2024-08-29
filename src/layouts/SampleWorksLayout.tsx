import styles from "./layout.module.scss";

export const SampleWorksLayout = () => {
  return (
    <div className={styles.sample_works_layout}>
      <h3>Sample Works</h3>
      <p>
        This section represents some of my{" "}
        <span>digital illustrations and web development </span> works, may it be
        personal or with various different clients. Some personal projects that
        also helped me learn throughout. Where I started, and how it shaped me
        now.
      </p>
      <h6>Digital Painting and Illustrations</h6>
    </div>
  );
};
