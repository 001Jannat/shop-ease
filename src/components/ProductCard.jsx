import React from 'react';
import { Box, Image, Text, Badge, Stack, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={product.photos[0]} alt={product.name} />
      <Box p="6">
        {product.discount && (
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {product.discount}% OFF
          </Badge>
        )}
        <Stack mt="1" spacing="2">
          <Text fontWeight="bold" as="h4" lineHeight="tight" isTruncated>
            {product.name}
          </Text>
          <Text>
            <Box as="span" color="gray.600" fontSize="sm">
              ₹{product.originalPrice}
            </Box>
            <Box as="span" color="black" fontSize="lg" ml="2">
              ₹{product.price}
            </Box>
          </Text>
          <Link as={RouterLink} to={`/product/${product.id}`}>
            View Details
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
