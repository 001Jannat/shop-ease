import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { Banner, ProductListEnhanced, CategoryList } from '../components';
import { ScrollToTopButton } from '../components/ui/FloatingActionButton';

const MotionFlex = motion(Flex);

const HomeEnhanced = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <MotionFlex 
      direction="column" 
      bg={bgColor}
      minH="100vh"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Banner Section with Enhanced Animations */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Banner />
      </motion.div>

      {/* Categories Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <CategoryList />
      </motion.div>

      {/* Enhanced Product List with Advanced Search */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <ProductListEnhanced />
      </motion.div>

      {/* Floating Action Button */}
      <ScrollToTopButton />
    </MotionFlex>
  );
};

export default HomeEnhanced;
