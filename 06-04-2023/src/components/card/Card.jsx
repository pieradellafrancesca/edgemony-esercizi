import Image from "next/image";
import styles from "./index.module.scss";
import Link from "next/link";

const Card = ({ post }) => {
  return (
    <Link href={"/blog/" + post?.slug}>
      <div className={styles.Card}>
        <Image src={post.image} width={400} height={300} alt={post?.title} />
        <p>{post.date}</p>
        <h3>{post.title}</h3>
      </div>
    </Link>
  );
};

export default Card;
