import React from 'react';
import { Box, Skeleton } from '@chakra-ui/react';

const ProductCardSkeleton = () => {
  return (
    <Box
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      mb="5"
      maxW="100%"
    >
      <Box p="3">
        <Skeleton height="400px" borderRadius="md" />
      </Box>
      <Box p="2">
        <Skeleton height="20px" mb="2" />
        <Skeleton height="16px" mb="2" />
        <Skeleton height="16px" width="100px" />
      </Box>
    </Box>
  );
};

export default ProductCardSkeleton;
