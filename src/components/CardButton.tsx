import React from "react";
import styles from "./CardButton.module.css";
interface CardButtonProps {
  text: string;
  color?: boolean;
}
const CardButton: React.FC<CardButtonProps> = ({ text, color }) => {
  return (
    <button className={color ? styles.blue : styles.button}>{text}</button>
  );
};

export default CardButton;
