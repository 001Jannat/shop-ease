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
  Image,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import { FaShoppingCart, FaUser, FaBars, FaHeart } from "react-icons/fa";
import { NavItems } from ".";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const displaySearchBar = useBreakpointValue({ base: false, md: true });

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
      width="100%"
    >
      <Flex alignItems="center" justify="space-between" wrap="wrap">
         <Link href="/" _hover={{ textDecoration: "none" }} display="flex"  alignItems="center" gap={2}>
        <Image src="./shop ease.png" alt="shop ease" boxSize="60px" rounded="full" mt={2} bg="teal.100" />
        <Flex alignItems="center" flex="1" justify="space-between">
          
          <Heading
            as="h1"
            size="lg"
            display={{ base:"none", md:"flex"}}
            bgGradient="linear(to-r, teal.500, blue.500)"
            bgClip="text"
            fontFamily="'Lobster', cursive"
          >
           
              Shop Ease
           
          </Heading>
          
        </Flex>
        </Link>
        <Spacer display={{ base: "none", md: "block" }} />
          <Box display={{ base: "none", md: "block" }}>
            <NavItems />
          </Box>
        <Flex alignItems="center" gap={4}>
          {displaySearchBar && (
            <Box>
              <InputGroup minW={{ base: "200px", md: "400px" }}>
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
          )}
          <IconButton
            as={Link}
            href="/user"
            icon={<FaUser />}
            aria-label="User"
            variant="ghost"
            color="blue.800"
            _hover={{ bg: "blue.100" }}
          />
          <IconButton
            as={Link}
            href="/heart"
            icon={<FaHeart color="red" />}
            aria-label="Heart"
            variant="ghost"
            color="blue.800"
            _hover={{ bg: "blue.100" }}
          />
          <IconButton
            as={Link}
            href="/cart"
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
          <DrawerCloseButton mt={2} color="black" />
          <DrawerHeader
            borderBottomWidth="1px"
            fontSize="xl"
            bgGradient="linear(to-r, teal.500, blue.500)"
            bgClip="text"
            fontFamily="'Lobster', cursive"
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
