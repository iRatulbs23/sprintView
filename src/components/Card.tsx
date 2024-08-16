import styles from "./Card.module.css";

interface CardProps {
  name: string;
  id: string;
  estimatedHour: number;
  remainingHour: number;
}

const Card: React.FC<CardProps> = ({
  name,
  id,
  estimatedHour,
  remainingHour,
}) => {
  const truncateText = (text: string, length: number) => {
    if (text.length > length) {
      return text.substring(0, length) + "...";
    }
    return text;
  };
  const truncatedName = truncateText(name, 22);
  return (
    <div className={styles.task}>
      <div className={styles.task_info}>
        <p className={styles.task_name}>
          <strong>{truncatedName}</strong>
        </p>
        <p className="task-id">{id}</p>
      </div>
      <div className={styles.task_times}>
        <p>Estimated Hour: {estimatedHour}h</p>
        <p>Remaining Hour: {remainingHour}h</p>
      </div>
    </div>
  );
};

export default Card;
