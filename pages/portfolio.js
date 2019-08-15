import { useEffect, useState } from "react";
import Head from "next/head";
import Project from "../components/Project";

console.log(process.env.SPACE_ID);
console.log(process.env.ACCESS_TOKEN);

// create a Contentful client to provide access to helper methods for retreiving data from Contentful
const client = require("contentful").createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
});

// this function retreives and displays our content from Contentful
function Portfolio() {
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
  const [projects, setProjects] = useState([]);
  // use above async functions to retreive content on initial load
  useEffect(() => {
    async function getProjects() {
      const contentTypes = await fetchContentTypes();
      const allProjects = await fetchEntriesForContentType(contentTypes[0]);
      setProjects([...allProjects]);
    }
    getProjects();
  }, []);
  console.log(projects.map(p => p.fields));
  // when content is retreived, the fields are mapped over to be displayed by our component
  return (
    <>
      <Head>
        <title>Daniel Alegria | Web Developer</title>
        <link
          rel="stylesheet"
          href="https://css.zeit.sh/v1.css"
          type="text/css"
        />
      </Head>
      {projects.length > 0
        ? projects.map(p => (
          <Project
            title={p.fields.title}
            date={p.fields.date}
            // image has fields of it's own
            image={p.fields.image.fields.file.url}
            excerpt={p.fields.excerpt}
            url={p.fields.url}
          />
        ))
        : null}
    </>
  );
}

export default Portfolio;
