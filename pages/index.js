import { useEffect, useState } from "react";
import Head from "next/head";
import Post from "../components/post";
import { createClient } from "contentful";

const SPACE = process.env.SPACE_ID;
const TOKEN = process.env.ACCESS_TOKEN;

const client = createClient({
  space: SPACE,
  accessToken: TOKEN
  // space: "x0lnab94pxmy",
  // accessToken: "RU0L9X_wtK44u2ET6GHe3aB3yJW8tlrlPLzsRt94y7k"
});

function HomePage() {
  async function fetchContentTypes() {
    const types = await client.getContentTypes();
    if (types.items) return types.items;
    console.log("Error getting Content Types.");
  }

  async function fetchEntriesForContentType(contentType) {
    const entries = await client.getEntries({
      content_type: contentType.sys.id
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const contentTypes = await fetchContentTypes();
      const allPosts = await fetchEntriesForContentType(contentTypes[0]);
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);

  return (
    <>
      <Head>
        <title>Next.js + Contentful</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      {posts.length > 0
        ? posts.map(p => (
            <Post
              alt={p.fields.alt}
              date={p.fields.date}
              key={p.fields.title}
              image={p.fields.image}
              title={p.fields.title}
              url={p.fields.url}
            />
          ))
        : null}
    </>
  );
}

export default HomePage;
