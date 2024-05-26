import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Link,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useBreakpointValue,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import { FaShoppingCart, FaUser, FaBars } from "react-icons/fa";
import {NavItems} from ".";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const displaySearchBar = useBreakpointValue({ base: "none", md: "block" });

  return (
    <Box
      as="header"
      bg="rgba(255, 255, 255, 0.6)"
      px={6}
      py={4}
      boxShadow="sm"
      backdropFilter="blur(10px)"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex alignItems="center" justify="space-between" wrap="wrap">
        <Flex alignItems="center">
          <Heading
            as="h1"
            size="lg"
            bgGradient="linear(to-r, teal.500, green.500)"
            bgClip="text"
            fontFamily="'Lobster', cursive"
          >
            <Link as={RouterLink} to="/" _hover={{ textDecoration: "none" }}>
              shop ease
            </Link>
          </Heading>
        </Flex>

        <Box display={{ base: "none", md: "block" }}>
          <NavItems />
        </Box>

        <Flex
          flex="1"
          justify={{ base: "flex-end", md: "space-between" }}
          alignItems="center"
          gap={4}
        >
          <Box display={displaySearchBar}>
            <InputGroup maxW="300px">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <InputRightElement>
                <IconButton
                  icon={<Search2Icon />}
                  aria-label="Search"
                  onClick={handleSearch}
                  variant="ghost"
                  color="blue.800"
                  _hover={{ bg: "blue.100" }}
                />
              </InputRightElement>
            </InputGroup>
          </Box>
          <IconButton
            as={RouterLink}
            to="/user"
            icon={<FaUser />}
            aria-label="User"
            variant="ghost"
            color="blue.800"
            _hover={{ bg: "blue.100" }}
          />
          <IconButton
            as={RouterLink}
            to="/cart"
            icon={<FaShoppingCart />}
            aria-label="Cart"
            variant="ghost"
            color="blue.800"
            _hover={{ bg: "blue.100" }}
          />
          <Box display={{ base: "block", md: "none" }}>
            <IconButton
              icon={<FaBars />}
              aria-label="Open Menu"
              onClick={onOpen}
              variant="ghost"
              color="blue.800"
              _hover={{ bg: "blue.100" }}
            />
          </Box>
        </Flex>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="white" p={4}>
          <DrawerCloseButton mt={2} />
          <DrawerHeader 
            borderBottomWidth="1px" 
            fontSize="2xl" 
            bgGradient="linear(to-r, teal.500, green.500)"
            bgClip="text"
          >
            Shop Ease
          </DrawerHeader>
          <DrawerBody>
            <NavItems />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
