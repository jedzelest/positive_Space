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

const Services = ({ header, skillList }: Props) => {
  return (
    <div className={styles.services_style}>
      <h3>{header}</h3>
      <ul>
        {skillList.map((skill) => (
          <li key={skill.id}>
            <img src={skill.imageIcon} alt="" />
            <h6>{skill.skillText}</h6>
            <p>{skill.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
