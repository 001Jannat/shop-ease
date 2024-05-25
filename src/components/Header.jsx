import React from 'react';
import { Box, Flex, Heading, Link, Spacer, IconButton, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { Search2Icon } from '@chakra-ui/icons';
import { FaShoppingCart, FaUser } from 'react-icons/fa';

const Header = () => {
  return (
    <Box bg="white" px={4} py={2} borderBottom="1px" borderColor="gray.200">
      <Flex direction="column">
        <Flex alignItems="center" mb={2}>
          <Heading as="h1" size="lg" color="green.500">
            <Link as={RouterLink} to="/" color="green.500">
              toqri.com
            </Link>
          </Heading>
          <Text ml={2} fontSize="sm" color="green.500">
            asset liquidator
          </Text>
          <Spacer />
          <Flex gap={2}>
            <IconButton
              as={RouterLink}
              to="/user"
              icon={<FaUser />}
              aria-label="User"
              variant="ghost"
            />
            <IconButton
              as={RouterLink}
              to="/cart"
              icon={<FaShoppingCart />}
              aria-label="Cart"
              variant="ghost"
              ml={2} // Add margin-left to create some space between the cart and user icon
            
            />
            <IconButton
              as={RouterLink}
              to="/search"
              icon={<Search2Icon />}
              aria-label="Search"
              variant="ghost"
              ml={4} // Add more margin-left to create more space between search and cart icon
              
            />
          </Flex>
          <Spacer />
          <Flex gap={4}>
            <Link as={RouterLink} to="/arrival" >
              NEW ARRIVALS
            </Link>
            <Link as={RouterLink} to="/sale" >
              SALE
            </Link>
            <Link as={RouterLink} to="/blog" >
              Blog
            </Link>
          </Flex>
        </Flex>

        {/* Second Row */}
        <Flex alignItems="center">
          <Flex gap={4}>
            <Link as={RouterLink} to="/chairs" >
              Chair
            </Link>
            <Link as={RouterLink} to="/tables" >
              TABLE
            </Link>
            <Link as={RouterLink} to="/storage" >
              STORAGE
            </Link>
            <Link as={RouterLink} to="/liquidate-asset" >
              LIQUIDATE ASSET
            </Link>
            <Link as={RouterLink} to="/contact-us" >
              CONTACT US
            </Link>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
