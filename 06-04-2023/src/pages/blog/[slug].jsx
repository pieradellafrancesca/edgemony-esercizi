import Layout from "@component/components/layout";
import { getPostData, getAllSlugs } from "@component/utils/posts";
import Image from "next/image";

export default function Post({ postData }) {
  return (
    <Layout>
      <h1>{postData.title}</h1>
      <Image
        src={postData.image}
        width={400}
        height={300}
        alt={postData.title}
      />
      <div>
        <p>{postData.body}</p>
      </div>
    </Layout>
  );
}

export const getStaticPaths = () => {
  const paths = getAllSlugs();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  const postData = getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
};
