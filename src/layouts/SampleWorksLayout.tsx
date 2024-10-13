import styles from "./layout.module.scss";
import Image from "../components/Image/Image";
import { ImageList1 } from "../components/Image/Imagedetails";

export const SampleWorksLayout = () => {
  return (
    <>
      <div className={styles.sample_works_header_layout}>
        <h3>Sample Works</h3>
        <p>
          This section represents some of my{" "}
          <span>digital illustrations and web development </span> works.
        </p>
        <h6>Digital Painting and Illustrations</h6>
      </div>
      <Image variant="secondary" details={ImageList1} />
    </>
  );
};
