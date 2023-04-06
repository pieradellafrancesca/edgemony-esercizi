import { postsJson } from "../pages/api/posts";

// ritorna tutti post
export function getAllPosts() {
  return postsJson;
}

//ritorna tutti gli slug
export function getAllSlugs() {
  let slugs = [];
  getAllPosts().map((post) => {
    slugs.push(`/blog/${post.slug}`);
  });
  return slugs;
}

//ritorna i dati del singolo post
export function getPostData(slug) {
  let post = null;
  getAllPosts().map((p) => {
    if (p.slug === slug) {
      post = p;
    }
  });
  return post;
}
