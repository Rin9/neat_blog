import { Heading, Text, Divider } from "@chakra-ui/react";
import Post from "./Post";

const Main = ({ posts }) => {
  console.log(posts[0]);
  return (
    <>
      <Heading as={"h2"} variant="subtitle">
        Latest
      </Heading>
      <Text my={"15px"} variant="intro">
        My latest blog posts.
      </Text>
      {/* Posts Section */}
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </>
  );
};

export default Main;
