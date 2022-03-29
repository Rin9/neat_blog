import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";

import { HamburgerIcon } from "@chakra-ui/icons";

const NavMenu = ({ isMobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const onChange = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* This is the overlay of "WHO AM I" option */}
      <Modal isOpen={isOpen} onClose={onChange}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>About</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            This is a simple blog. <br />
            Nothing fancy.
            <br />
            Enjoy!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onChange}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* This is the About menu */}
      <Menu>
        <MenuButton as={Button}>
          {isMobile ? <HamburgerIcon /> : "About"}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={onChange} variant="ghost">
            About
          </MenuItem>

          <a href={"https://github.com/Rin9"} target="_blank">
            <MenuItem>Github</MenuItem>
          </a>

          <a
            href="https://open.spotify.com/playlist/1HHnztnqsuK110DtKT9nX6?si=9605755b60d04087"
            target="_blank"
            rel="noreferrer"
          >
            <MenuItem>My Spotify Playlist</MenuItem>
          </a>
        </MenuList>
      </Menu>
    </>
  );
};

export default NavMenu;
