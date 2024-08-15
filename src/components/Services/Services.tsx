import styles from "./Services.module.scss";
interface Props {
  header: string;
  skillList: {
    id: number;
    imageIcon: string;
    skillText: string;
    description: string;
  }[];
}

const Services = () => {
  return (
    <div className={styles.services_style}>
      <h3>Services</h3>
      <ul>
        <li>
          <img src="src/assets/controller.png" alt="" />
          <h6>Game Illustration</h6>
          <p>
            Illustrations and digital drawings for video games and mobile games.
          </p>
        </li>
        <li>
          <img src="src/assets/controller.png" alt="" />
          <h6>Game Illustration</h6>
          <p>
            Illustrations and digital drawings for video games and mobile games.
          </p>
        </li>
        <li>
          <img src="src/assets/controller.png" alt="" />
          <h6>Game Illustration</h6>
          <p>
            Illustrations and digital drawings for video games and mobile games.
          </p>
        </li>
        <li>
          <img src="src/assets/controller.png" alt="" />
          <h6>Game Illustration</h6>
          <p>
            Illustrations and digital drawings for video games and mobile games.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Services;
