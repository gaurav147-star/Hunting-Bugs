import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";
const Blog = (props) => {
  // console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);

  return (
    <main className={styles.main}>
      <div className={styles.blogs}>
        <h2>Popular Blogs</h2>
        {blogs.map((blogitem) => {
          return (
            <div className={styles.blogItem} key={blogitem.slug}>
              <Link href={`/blogpost/${blogitem.slug}`}>
                <h3>{blogitem.title}</h3>
              </Link>
              <p>{blogitem.content.substr(0, 150)} ...</p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();
  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}
export default Blog;
