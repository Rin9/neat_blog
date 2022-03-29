import { Box, Container, Flex, Text, IconButton } from "@chakra-ui/react";
import { SiGithub, SiSpotify } from "react-icons/si";

const Footer = () => {
  return (
    <Box backgroundColor={"#252f3e"} height="100px">
      <Container maxW={"container.xl"} height="100%">
        <Flex
          height="100%"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Box maxW={["250px", "500px"]}>
            <Text variant="footer">
              Powered by Next.js & GraphCMS & Chakra UI & love ❤️
            </Text>
          </Box>

          <Box>
            <a href={"https://github.com/Rin9"} target="_blank">
              <IconButton
                colorScheme="gray.400"
                fontSize={["20px", "30px"]}
                icon={<SiGithub />}
                mr={["10px", "15px"]}
              />
            </a>
            <a
              href={
                "https://open.spotify.com/playlist/1HHnztnqsuK110DtKT9nX6?si=9605755b60d04087"
              }
              target="_blank"
              rel="noreferrer"
            >
              <IconButton
                colorScheme="gray.400"
                fontSize={["20px", "30px"]}
                icon={<SiSpotify />}
              />
            </a>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
