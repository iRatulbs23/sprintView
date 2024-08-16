import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      <div className={styles.inner}>+ Create a new task</div>
    </button>
  );
};

export default Button;
