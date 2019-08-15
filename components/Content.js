import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import styled from "styled-components";

const StyledContent = styled.article`
  grid-area: "content";

  height: 100%;

  border: solid 3px #4b4b4b;
  border-radius: 5px;
  padding: 5px;
`;

const Showcase = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
`;

console.log(process.env.SPACE_ID);
console.log(process.env.ACCESS_TOKEN);

// create a Contentful client to provide access to helper methods for retreiving data from Contentful
const client = require("contentful").createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
});

// this function retreives and displays our content from Contentful
function Content() {
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
    <StyledContent>
      <Showcase>
        <>
          {projects.length > 0
            ? projects.map(p => (
                <ProjectCard
                  title={p.fields.title}
                  // image has fields of it's own
                  image={p.fields.image.fields.file.url}
                  url={p.fields.url}
                />
              ))
            : null}
        </>
      </Showcase>
    </StyledContent>
  );
}

export default Content;
