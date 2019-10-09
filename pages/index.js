import { useEffect, useState } from "react";
import { createClient } from "contentful";
import Layout from "../components/layout";
import Hero from "../components/hero";
import GalleryPicture from "../components/gallery-picture";
import Gallery from "../components/gallery";

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
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
      const allPosts = await fetchEntriesForContentType(contentTypes[1]);
      setPosts([...allPosts]);
    }
    getPosts();
  }, []);

  return (
    <Layout>
      <Hero />
      <Gallery data={posts} />
    </Layout>
  );
}

export default HomePage;
