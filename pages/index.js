import Head from "next/head";
import HomeLayout from "../layouts/HomeLayout";
import Content from "../components/content";

console.log(process.env.SPACE_ID);
console.log(process.env.ACCESS_TOKEN);

// create a Contentful client to provide access to helper methods for retreiving data from Contentful
const client = require("contentful").createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
});

// this function retreives and displays our content from Contentful
function HomePage() {
  return (
    <>
      <Head>
        <title>Daniel Alegria | Web Developer</title>
      </Head>
      <HomeLayout>
        <Content />
      </HomeLayout>
    </>
  );
}

export default HomePage;
