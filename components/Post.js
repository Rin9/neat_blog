import {
  Box,
  Flex,
  Text,
  Spacer,
  Heading,
  Divider,
  Link as InnerLink,
} from "@chakra-ui/react";
import Link from "next/link";
import moment from "moment";

const Post = ({ post }) => {
  return (
    <Box>
      <Divider />
      <Flex my={["20px", "50px"]} direction={["column", "row"]}>
        <Box mb={["20px"]} minW="200px">
          <Text variant="intro">
            {moment(post?.publishedAt).format("dddd, MMM DD, YYYY")}
          </Text>
        </Box>
        <Spacer maxW={"60px"} />
        <Box maxW={"1000px"}>
          <Heading as="h3" variant={"subtitle"}>
            {post?.title}
          </Heading>
          <Text variant="intro" my="20px">
            {post?.excerpt}
          </Text>
          <Link href={`/post/${encodeURIComponent(post?.slug)}`} passHref>
            <InnerLink variant={"default"}>Read more →</InnerLink>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Post;
