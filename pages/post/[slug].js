import React from "react";
import {
  Container,
  Center,
  Text,
  Heading,
  VStack,
  StackDivider,
  Box,
  Flex,
  Avatar,
  Link as InnerLink,
  Tag,
  HStack,
  Image,
  Divider,
} from "@chakra-ui/react";
// reusable components
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
//dynamicly change the head
import Head from "next/head";
import Link from "next/link";
// date transform
import moment from "moment";
// reuseable heading components
import HeadingComponent from "../../components/utils/HeadingComponent";
// get post data
import { getPostDetails, getPosts } from "/src/services/data";
//custimize hook for geting window size
import useWindowSize from "/src/utils/useWindowSize";

const PostDetail = ({ data }) => {
  // get window size for responsive design
  const { width } = useWindowSize();

  // console.log(data);
  const { post } = data;
  // console.log(post?.content?.raw);

  // render rich text function
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        //if rich text has bold style
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "paragraph":
        return (
          <Text key={index} mb="50px">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </Text>
        );
      case "heading-one":
        return (
          <HeadingComponent
            as="h1"
            key={index}
            modifiedText={modifiedText}
            variant={"heading1"}
          />
        );
      case "heading-two":
        return (
          <HeadingComponent
            as="h2"
            key={index}
            modifiedText={modifiedText}
            variant={"heading2"}
          />
        );
      case "heading-three":
        return (
          <HeadingComponent
            as="h3"
            key={index}
            modifiedText={modifiedText}
            variant={"heading3"}
          />
        );
      case "heading-four":
        return (
          <HeadingComponent
            as="h4"
            key={index}
            modifiedText={modifiedText}
            variant={"heading4"}
          />
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <>
      <Head>
        <title>{post?.title} | Neat Blog</title>
      </Head>
      <Container maxW={"container.xl"} minH={"1000px"}>
        {/* Nav Conponents, just don't touch it */}
        <Nav />
        {/* post publish date */}
        <Center mt="15px" mb="5px">
          <Text variant="intro">
            {moment(post?.publishedAt).format("dddd, MMM DD, YYYY")}
          </Text>
        </Center>
        {/* post title */}
        <Center>
          <Heading variant="postDetailTitle">{post?.title}</Heading>
        </Center>
        {/* post container */}
        <Container maxW={"container.xl"} mt={["20px", "70px"]} minH="1000px">
          <Flex
            direction={["column", "row"]}
            rowGap="10px"
            justify="space-between"
            mb={["30px", "50px"]}
          >
            {/* left side: author bio, tags, etc.. */}
            <VStack
              divider={<StackDivider borderColor="gray.200" />}
              spacing={["5", "10"]}
              align="stretch"
              minW="200px"
              mt={["30px", "50px"]}
              mb="30px"
            >
              <Flex direction="row">
                <Avatar
                  src={post?.author.picture?.url}
                  name={post?.author.name}
                />
                <Flex ml="10px" direction="column">
                  <Text variant="postDetailAuthor">{post?.author.name}</Text>
                  <Text variant="intro">{post?.author.biography}</Text>
                </Flex>
              </Flex>
              <Box>
                <Text variant="intro">TAGS</Text>
                <HStack mt="5px">
                  {post?.tags?.map((tag) => {
                    return <Tag key={tag}>{tag}</Tag>;
                  })}
                </HStack>
              </Box>

              {width >= 480 && (
                <Box>
                  <Link href={"/"} passHref>
                    <InnerLink variant={"default"}>
                      ← Back to the blog
                    </InnerLink>
                  </Link>
                </Box>
              )}
            </VStack>
            {/* right side: post article*/}
            <VStack maxW="900px" align="center" justify="flex-start">
              <Box maxW="100%" mb="20px">
                <Image src={post?.coverImage?.url} alt={post?.title} />
              </Box>
              <Divider size="5px" />
              <Box maxW="100%">
                {post.content.raw.children.map((typeObj, index) => {
                  // console.log(typeObj, index);
                  const children = typeObj.children.map((item, itemindex) => {
                    console.log(item);
                    return getContentFragment(itemindex, item.text, item);
                  });

                  return getContentFragment(
                    index,
                    children,
                    typeObj,
                    typeObj.type
                  );
                })}
              </Box>
            </VStack>
          </Flex>
          {width < 480 && (
            <Box mb="30px">
              <Link href={"/"} passHref>
                <InnerLink variant={"default"}>← Back to the blog</InnerLink>
              </Link>
            </Box>
          )}
        </Container>
      </Container>

      {/* footer component, just don't touch it */}
      <Footer />
    </>
  );
};

export default PostDetail;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: { data: data },
  };
}

export async function getStaticPaths() {
  const { posts } = await getPosts();
  return {
    paths: posts.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}
