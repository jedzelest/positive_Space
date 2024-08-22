import styles from "./InformationBox.module.scss";

interface Props {
  name: string;
  date_of_birth: string;
  email: string;
  phone: string;
  nationality: string;
}

const InformationBox = ({
  name,
  date_of_birth,
  email,
  phone,
  nationality,
}: Props) => {
  return (
    <div className={styles.info_box}>
      <header>
        <img src="/assets/pencil.png" alt="Test" />
        <h6>Personal Information</h6>
      </header>
      <ul>
        <li>
          <p>Name: {name}</p>
        </li>
        <li>
          <p>Date of Birth: {date_of_birth}</p>
        </li>
        <li>
          <p>Email: {email}</p>
        </li>
        <li>
          <p>Phone: {phone}</p>
        </li>
        <li>
          <p>Nationality: {nationality}</p>
        </li>
      </ul>
    </div>
  );
};

export default InformationBox;
