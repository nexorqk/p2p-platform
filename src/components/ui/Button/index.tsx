import styles from "./Button.module.css";

const Button = ({
  children,
  ...props
}: {
  children: JSX.Element | JSX.Element[] | string | string[];
  [x: string]: unknown;
}) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default Button;
