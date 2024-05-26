import React from 'react';
import { Box, Skeleton } from '@chakra-ui/react';

const LoadingSkeleton = ({ height, width }) => {
  return (
    <Box>
      <Skeleton height={height} width={width} />
    </Box>
  );
};

export default LoadingSkeleton;
