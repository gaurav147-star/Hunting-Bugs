import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/BlogPost.module.css";

const Slug = (props) => {
  // const router = useRouter();
  // const { slug } = router.query;
  const [blog, setBlog] = useState(props.Blog);

  return (
    <main className={styles.main}>
      <h1>{blog && blog.title}</h1>
      <hr />
      <div className={styles.blogDetails}>{blog && blog.content}</div>
    </main>
  );
};

export async function getServerSideProps(context) {
  console.log(context.query);
  const { slug } = context.query;

  let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  let Blog = await data.json();
  return {
    props: { Blog }, // will be passed to the page component as props
  };
}

export default Slug;
