import React from 'react';
import { motion } from 'framer-motion';
import { Box, Skeleton, SkeletonText, VStack, HStack } from '@chakra-ui/react';

const MotionBox = motion(Box);

export const ProductCardSkeleton = () => {
  return (
    <MotionBox
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      bg="white"
      boxShadow="md"
      p={4}
      maxW="280px"
      mx="auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <VStack spacing={4} align="stretch">
        <motion.div
          animate={{ 
            background: [
              "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
              "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
              "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)"
            ]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Skeleton height="200px" borderRadius="md" />
        </motion.div>
        
        <VStack spacing={3} align="stretch">
          <SkeletonText noOfLines={2} spacing="2" />
          <HStack justify="space-between">
            <Skeleton height="20px" width="60px" />
            <Skeleton height="20px" width="40px" />
          </HStack>
          <Skeleton height="40px" borderRadius="md" />
        </VStack>
      </VStack>
    </MotionBox>
  );
};

export const BannerSkeleton = () => {
  return (
    <MotionBox
      width="100%"
      height="300px"
      borderRadius="md"
      overflow="hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
        }}
        animate={{
          background: [
            "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
            "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
            "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)"
          ]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </MotionBox>
  );
};

export const GridSkeleton = ({ count = 8 }) => {
  return (
    <Box>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        <Box
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)"
          }}
          gap={6}
          p={4}
        >
          {Array.from({ length: count }).map((_, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5 }}
            >
              <ProductCardSkeleton />
            </motion.div>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export const LoadingSpinner = ({ size = "lg" }) => {
  const spinnerSize = {
    sm: "30px",
    md: "40px",
    lg: "60px",
    xl: "80px"
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" py={8}>
      <motion.div
        style={{
          width: spinnerSize[size],
          height: spinnerSize[size],
          border: "4px solid #e2e8f0",
          borderTop: "4px solid #8A2BE2",
          borderRadius: "50%",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </Box>
  );
};

export const PulseLoader = ({ count = 3 }) => {
  return (
    <HStack spacing={2} justify="center" py={4}>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#8A2BE2",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            delay: index * 0.2,
          }}
        />
      ))}
    </HStack>
  );
};

export default ProductCardSkeleton;
