import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Grid,
  Text,
  VStack,
  HStack,
  Image,
  Badge,
  Button,
  useToast,
  Flex,
  Spacer,
  IconButton,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { FaHeart, FaTrash, FaShoppingCart, FaEye } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { useCart } from '../cart/ShoppingCart';

const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useCart();
  const toast = useToast();
  
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const cardBg = useColorModeValue('white', 'gray.800');

  useEffect(() => {
    // Load wishlist from localStorage
    const loadWishlist = () => {
      try {
        const likes = JSON.parse(localStorage.getItem('likes')) || [];
        const products = JSON.parse(localStorage.getItem('products')) || [];
        
        // Filter products that are in wishlist
        const wishlistProducts = products.filter(product => 
          likes.includes(product.id)
        );
        
        setWishlistItems(wishlistProducts);
      } catch (error) {
        console.error('Error loading wishlist:', error);
        toast({
          title: 'Error loading wishlist',
          description: 'There was an error loading your wishlist items.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setIsLoading(false);
      }
    };

    loadWishlist();
  }, [toast]);

  const removeFromWishlist = (productId) => {
    try {
      const likes = JSON.parse(localStorage.getItem('likes')) || [];
      const newLikes = likes.filter(id => id !== productId);
      localStorage.setItem('likes', JSON.stringify(newLikes));
      
      setWishlistItems(prev => prev.filter(item => item.id !== productId));
      
      toast({
        title: 'Removed from wishlist',
        description: 'Item has been removed from your wishlist.',
        status: 'info',
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      toast({
        title: 'Error',
        description: 'Failed to remove item from wishlist.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  const clearWishlist = () => {
    try {
      localStorage.setItem('likes', JSON.stringify([]));
      setWishlistItems([]);
      
      toast({
        title: 'Wishlist cleared',
        description: 'All items have been removed from your wishlist.',
        status: 'success',
        duration: 2000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error clearing wishlist:', error);
      toast({
        title: 'Error',
        description: 'Failed to clear wishlist.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  if (isLoading) {
    return (
      <Box bg={bgColor} minH="100vh" py={8}>
        <Box maxW="7xl" mx="auto" px={4}>
          <Text fontSize="2xl" fontWeight="bold" mb={6}>Loading your wishlist...</Text>
          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)"
            }}
            gap={6}
          >
            {Array.from({ length: 8 }).map((_, index) => (
              <Box
                key={index}
                bg={cardBg}
                borderRadius="lg"
                p={4}
                boxShadow="md"
                height="300px"
                animate={{ pulse: true }}
              />
            ))}
          </Grid>
        </Box>
      </Box>
    );
  }

  return (
    <Box bg={bgColor} minH="100vh" py={8}>
      <Box maxW="7xl" mx="auto" px={4}>
        <MotionBox
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Flex align="center" mb={8}>
            <VStack align="start" spacing={2}>
              <Text fontSize="3xl" fontWeight="bold" color="purple.600">
                My Wishlist
              </Text>
              <Text color="gray.600">
                {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} in your wishlist
              </Text>
            </VStack>
            <Spacer />
            {wishlistItems.length > 0 && (
              <Button
                leftIcon={<FaTrash />}
                colorScheme="red"
                variant="outline"
                onClick={clearWishlist}
                size="sm"
              >
                Clear All
              </Button>
            )}
          </Flex>
        </MotionBox>

        {wishlistItems.length === 0 ? (
          <MotionBox
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            textAlign="center"
            py={16}
          >
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3
              }}
            >
              <FaHeart size="64px" color="#E53E3E" style={{ margin: '0 auto 16px' }} />
            </motion.div>
            <Text fontSize="2xl" fontWeight="semibold" mb={4} color="gray.600">
              Your wishlist is empty
            </Text>
            <Text color="gray.500" mb={8}>
              Start adding products you love to your wishlist!
            </Text>
            <Button
              as={RouterLink}
              to="/"
              colorScheme="purple"
              size="lg"
              leftIcon={<FaShoppingCart />}
            >
              Continue Shopping
            </Button>
          </MotionBox>
        ) : (
          <MotionGrid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)"
            }}
            gap={6}
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
            <AnimatePresence>
              {wishlistItems.map((product) => (
                <motion.div
                  key={product.id}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 }
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.8, 
                    transition: { duration: 0.2 } 
                  }}
                  transition={{ duration: 0.5 }}
                  layout
                >
                  <WishlistCard
                    product={product}
                    onRemove={() => removeFromWishlist(product.id)}
                    onAddToCart={() => handleAddToCart(product)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </MotionGrid>
        )}
      </Box>
    </Box>
  );
};

const WishlistCard = ({ product, onRemove, onAddToCart }) => {
  const cardBg = useColorModeValue('white', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <MotionBox
      bg={cardBg}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      position="relative"
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Remove button */}
      <IconButton
        aria-label="Remove from wishlist"
        icon={<FaTrash />}
        position="absolute"
        top="8px"
        right="8px"
        size="sm"
        colorScheme="red"
        variant="solid"
        borderRadius="full"
        zIndex={2}
        onClick={onRemove}
        opacity={0.9}
        _hover={{ opacity: 1, transform: 'scale(1.1)' }}
        transition="all 0.2s"
      />

      {/* Product Image */}
      <Box position="relative" overflow="hidden">
        <Image
          src={product.photos[0]}
          alt={product.name}
          width="100%"
          height="200px"
          objectFit="cover"
          transition="transform 0.3s"
          _hover={{ transform: 'scale(1.05)' }}
        />
        
        {product.discount && (
          <Badge
            position="absolute"
            top="8px"
            left="8px"
            colorScheme="red"
            borderRadius="full"
            px={2}
            py={1}
            fontSize="xs"
          >
            {product.discount}% OFF
          </Badge>
        )}
      </Box>

      {/* Product Info */}
      <Box p={4}>
        <VStack align="stretch" spacing={3}>
          <Text
            fontWeight="semibold"
            fontSize="md"
            lineHeight="tight"
            noOfLines={2}
            color={textColor}
          >
            {product.name}
          </Text>

          <HStack justify="space-between">
            <VStack align="start" spacing={1}>
              <Text fontSize="lg" fontWeight="bold" color="purple.600">
                ₹{product.price}
              </Text>
              {product.originalPrice && (
                <Text fontSize="sm" textDecoration="line-through" color="gray.500">
                  ₹{product.originalPrice}
                </Text>
              )}
            </VStack>
          </HStack>

          {/* Action Buttons */}
          <VStack spacing={2}>
            <Button
              leftIcon={<FaShoppingCart />}
              colorScheme="purple"
              size="sm"
              width="100%"
              onClick={onAddToCart}
              _hover={{ transform: 'translateY(-1px)' }}
              transition="all 0.2s"
            >
              Add to Cart
            </Button>
            
            <Button
              as={RouterLink}
              to={`/product/${product.id}`}
              leftIcon={<FaEye />}
              variant="outline"
              colorScheme="blue"
              size="sm"
              width="100%"
              _hover={{ transform: 'translateY(-1px)' }}
              transition="all 0.2s"
            >
              View Details
            </Button>
          </VStack>
        </VStack>
      </Box>
    </MotionBox>
  );
};

export default WishlistPage;
