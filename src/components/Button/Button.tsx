import styles from "./Button.module.scss";

interface Props {
  context: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger";
  icon?: string;
}

const Button = ({ context, onClick, type, disabled, icon }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={styles.button_style}
    >
      {context}
      {icon && <img src={icon} alt="" />}
    </button>
  );
};

export default Button;
