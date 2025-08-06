import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, SimpleGrid, Flex, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import ProductCardEnhanced from './ProductCardEnhanced';
import AdvancedSearch from './search/AdvancedSearch';
import { GridSkeleton, LoadingSpinner } from './loading/EnhancedLoadingStates';
import productsData from '../assets/products.json';
import { Pagination } from '.';

const MotionBox = motion(Box);
const MotionSimpleGrid = motion(SimpleGrid);

const ProductListEnhanced = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const itemsPerPage = 8;

  const bgColor = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  // Extract unique categories from products
  const categories = [
    { value: 'women_ethnic', label: 'Women Ethnic' },
    { value: 'women_western', label: 'Women Western' },
    { value: 'men', label: 'Men' },
    { value: 'kids', label: 'Kids' },
    { value: 'accessories', label: 'Accessories' },
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setAllProducts(productsData);
      setFilteredProducts(productsData);
      setIsLoading(false);
      
      // Store products in localStorage for wishlist functionality
      localStorage.setItem('products', JSON.stringify(productsData));
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleFilteredResults = (filtered) => {
    setIsSearching(true);
    setFilteredProducts(filtered);
    setCurrentPage(1); // Reset to first page when filtering
    
    // Small delay to show search animation
    setTimeout(() => {
      setIsSearching(false);
    }, 300);
  };

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  if (isLoading) {
    return (
      <MotionBox
        px={[2, 4, 8]} 
        py={8} 
        mx="auto" 
        maxW="1600px"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <VStack spacing={8}>
          <Text fontSize="2xl" fontWeight="bold" color={textColor}>
            Loading amazing products...
          </Text>
          <GridSkeleton count={8} />
        </VStack>
      </MotionBox>
    );
  }

  return (
    <MotionBox
      px={[2, 4, 8]} 
      py={8} 
      mx="auto" 
      maxW="1600px"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <VStack spacing={8} align="stretch">
        {/* Search and Filter Section */}
        <AdvancedSearch
          products={allProducts}
          onFilteredResults={handleFilteredResults}
          isLoading={isSearching}
          categories={categories}
        />

        {/* Results Summary */}
        <MotionBox
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Flex justify="space-between" align="center" mb={6}>
            <Text fontSize="lg" fontWeight="semibold" color={textColor}>
              Showing {currentProducts.length} of {filteredProducts.length} products
            </Text>
            {filteredProducts.length === 0 && !isSearching && (
              <Text color="red.500" fontSize="md">
                No products found. Try adjusting your filters.
              </Text>
            )}
          </Flex>
        </MotionBox>

        {/* Loading State for Search */}
        {isSearching && <LoadingSpinner />}

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          {!isSearching && (
            <motion.div
              key="products-grid"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
            >
              <Flex justify="center">
                <MotionSimpleGrid 
                  columns={[1, 2, 3, 4]} 
                  spacing={[4, 6, 8]} 
                  width="100%"
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
                  {currentProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      variants={{
                        hidden: { opacity: 0, y: 20, scale: 0.9 },
                        visible: { opacity: 1, y: 0, scale: 1 }
                      }}
                      transition={{ 
                        duration: 0.5,
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      <ProductCardEnhanced 
                        product={product} 
                        index={index}
                      />
                    </motion.div>
                  ))}
                </MotionSimpleGrid>
              </Flex>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination */}
        {!isSearching && totalPages > 1 && (
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Flex justify="center" mt={8}>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </Flex>
          </MotionBox>
        )}

        {/* Empty State */}
        {!isSearching && filteredProducts.length === 0 && (
          <MotionBox
            textAlign="center"
            py={16}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <Text fontSize="6xl" mb={4}>🔍</Text>
            </motion.div>
            <Text fontSize="2xl" fontWeight="bold" color={textColor} mb={4}>
              No products found
            </Text>
            <Text color="gray.500" fontSize="lg">
              Try adjusting your search terms or filters
            </Text>
          </MotionBox>
        )}
      </VStack>
    </MotionBox>
  );
};

export default ProductListEnhanced;
