import React, { useState } from "react";
import { motion } from "framer-motion";
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
  HStack,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import { FaBars, FaHeart } from "react-icons/fa";
import { NavItems } from ".";
import ThemeToggle from "./theme/ThemeToggle";
import { CartButton, useCart } from "./cart/ShoppingCart";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getTotalItems } = useCart();
  
  const bgColor = useColorModeValue("rgba(255, 255, 255, 0.8)", "rgba(26, 32, 44, 0.8)");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleWishlistClick = () => {
    navigate('/wishlist');
  };

  const displaySearchBar = useBreakpointValue({ base: false, md: true });

  return (
    <MotionBox
      as="header"
      bg={bgColor}
      px={6}
      py={4}
      boxShadow="lg"
      backdropFilter="blur(20px)"
      borderBottom="1px"
      borderColor={borderColor}
      position="sticky"
      top="0"
      zIndex="1000"
      width="100%"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <Flex alignItems="center" justify="space-between" wrap="wrap">
        {/* Logo Section */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link 
            href="/" 
            _hover={{ textDecoration: "none" }} 
            display="flex"  
            alignItems="center" 
            gap={3}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Image 
                src="./shop ease.png" 
                alt="shop ease" 
                boxSize="50px" 
                rounded="full" 
                bg="purple.100"
                border="3px solid"
                borderColor="purple.300"
              />
            </motion.div>
            
            <Heading
              as="h1"
              size="lg"
              display={{ base: "none", md: "flex" }}
              bgGradient="linear(to-r, purple.500, pink.500)"
              bgClip="text"
              fontFamily="'Lobster', cursive"
              fontWeight="bold"
            >
              Shop Ease
            </Heading>
          </Link>
        </motion.div>

        <Spacer display={{ base: "none", lg: "block" }} />

        {/* Navigation Items - Desktop */}
        <Box display={{ base: "none", lg: "block" }}>
          <NavItems />
        </Box>

        <Spacer />

        {/* Search Bar - Desktop */}
        {displaySearchBar && (
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            mx={4}
            maxW="400px"
            flex="1"
          >
            <InputGroup size="md">
              <Input
                placeholder="Search amazing products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                borderRadius="full"
                bg={useColorModeValue("white", "gray.700")}
                border="2px solid"
                borderColor="purple.200"
                _focus={{
                  borderColor: "purple.400",
                  boxShadow: "0 0 0 1px #8A2BE2",
                  bg: useColorModeValue("white", "gray.600"),
                }}
                _hover={{
                  borderColor: "purple.300",
                }}
              />
              <InputRightElement>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <IconButton
                    aria-label="Search"
                    icon={<Search2Icon />}
                    onClick={handleSearch}
                    variant="ghost"
                    colorScheme="purple"
                    borderRadius="full"
                    size="sm"
                  />
                </motion.div>
              </InputRightElement>
            </InputGroup>
          </MotionBox>
        )}

        {/* Action Buttons */}
        <MotionFlex 
          alignItems="center" 
          gap={3}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Wishlist Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconButton
              aria-label="Wishlist"
              icon={<FaHeart />}
              onClick={handleWishlistClick}
              variant="ghost"
              fontSize="20px"
              color="red.500"
              _hover={{ color: 'red.600', bg: 'red.50' }}
              position="relative"
            />
          </motion.div>

          {/* Shopping Cart */}
          <CartButton />

          {/* Mobile Menu Button */}
          <Box display={{ base: "block", lg: "none" }}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <IconButton
                aria-label="Open menu"
                icon={<FaBars />}
                onClick={onOpen}
                variant="ghost"
                colorScheme="purple"
                fontSize="18px"
              />
            </motion.div>
          </Box>
        </MotionFlex>
      </Flex>

      {/* Mobile Search Bar */}
      {!displaySearchBar && (
        <MotionBox 
          mt={4}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <InputGroup size="md">
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              borderRadius="full"
              bg={useColorModeValue("white", "gray.700")}
              border="2px solid"
              borderColor="purple.200"
              _focus={{
                borderColor: "purple.400",
                boxShadow: "0 0 0 1px #8A2BE2",
              }}
            />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<Search2Icon />}
                onClick={handleSearch}
                variant="ghost"
                colorScheme="purple"
                borderRadius="full"
                size="sm"
              />
            </InputRightElement>
          </InputGroup>
        </MotionBox>
      )}

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Text bgGradient="linear(to-r, purple.500, pink.500)" bgClip="text" fontWeight="bold">
              Shop Ease Menu
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <NavItems isMobile onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </MotionBox>
  );
};

export default Header;
