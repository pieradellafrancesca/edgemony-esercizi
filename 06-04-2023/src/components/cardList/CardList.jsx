import Card from "../card";
import styles from "./index.module.scss";

const CardList = ({ postData }) => {
  return (
    <div className={styles.CardList}>
      {postData?.map((post, index) => (
        <Card post={post} key={index} />
      ))}
    </div>
  );
};

export default CardList;
