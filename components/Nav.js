import { useState, useEffect } from "react";
import {
  Box,
  Center,
  Heading,
  Flex,
  Spacer,
  Button,
  Stack,
  Link as InnerLink,
  useColorMode,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import Link from "next/link";
import NavMenu from "./NavMenu";
import useWindowSize from "../src/utils/useWindowSize";

const Nav = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();

  // custmize hook for geting window size
  const { width } = useWindowSize();

  return (
    <Stack
      spacing={"8"}
      maxW={"container.xl"}
      h="150px"
      alignItems="center"
      direction={"row"}
    >
      <Flex
        h="100%"
        maxW={"container.lg"}
        alignItems="center"
        columnGap={["15px", "50px"]}
      >
        {/* This is the hamburger menu icon */}
        {width < 480 && (
          <Center>
            <NavMenu isMobile={true} />
          </Center>
        )}

        {/* This is the logo */}
        <Link href={"/"} passHref>
          <InnerLink>
            <Heading as="h1">JW Blog</Heading>
          </InnerLink>
        </Link>
        {/* About button */}

        {width >= 480 && (
          <Center>
            <NavMenu />
          </Center>
        )}
      </Flex>
      <Spacer />
      <Center>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        </Button>
      </Center>
    </Stack>
  );
};

export default Nav;
