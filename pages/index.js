import { Container } from "@chakra-ui/react";
import Head from "next/head";
import Nav from "../components/Nav";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { getPosts } from "../src/services/data";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Neat Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={"container.xl"} minH="100vh">
        <Nav />
        <Main posts={posts.posts} />
      </Container>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: {
      posts,
    },
  };
}
