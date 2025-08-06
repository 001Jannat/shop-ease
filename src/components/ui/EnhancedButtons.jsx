import React from 'react';
import { motion } from 'framer-motion';
import { Box, Button, Text, VStack, HStack, useColorModeValue } from '@chakra-ui/react';
import { FaShoppingCart, FaHeart, FaEye, FaShare } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const EnhancedButton = ({ 
  children, 
  icon, 
  colorScheme = 'purple', 
  variant = 'solid',
  size = 'md',
  onClick,
  isLoading = false,
  loadingText,
  ...props 
}) => {
  const hoverBg = useColorModeValue(`${colorScheme}.400`, `${colorScheme}.600`);
  
  return (
    <MotionButton
      leftIcon={icon}
      colorScheme={colorScheme}
      variant={variant}
      size={size}
      onClick={onClick}
      isLoading={isLoading}
      loadingText={loadingText}
      whileHover={{ 
        scale: 1.05, 
        y: -2,
        boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
      }}
      whileTap={{ 
        scale: 0.95,
        y: 0
      }}
      transition={{ 
        type: "spring", 
        stiffness: 400, 
        damping: 17 
      }}
      _hover={{
        bg: hoverBg,
        transform: 'none' // Override Chakra's default hover transform
      }}
      {...props}
    >
      {children}
    </MotionButton>
  );
};

export const AddToCartButton = ({ product, onAddToCart, ...props }) => {
  return (
    <EnhancedButton
      icon={<FaShoppingCart />}
      onClick={() => onAddToCart(product)}
      {...props}
    >
      Add to Cart
    </EnhancedButton>
  );
};

export const WishlistButton = ({ isLiked, onToggle, ...props }) => {
  return (
    <EnhancedButton
      icon={<FaHeart />}
      colorScheme={isLiked ? 'red' : 'gray'}
      variant={isLiked ? 'solid' : 'outline'}
      onClick={onToggle}
      size="sm"
      {...props}
    >
      {isLiked ? 'Remove from Wishlist' : 'Add to Wishlist'}
    </EnhancedButton>
  );
};

export const QuickViewButton = ({ onQuickView, ...props }) => {
  return (
    <EnhancedButton
      icon={<FaEye />}
      variant="outline"
      colorScheme="blue"
      size="sm"
      onClick={onQuickView}
      {...props}
    >
      Quick View
    </EnhancedButton>
  );
};

export const ShareButton = ({ onShare, ...props }) => {
  return (
    <EnhancedButton
      icon={<FaShare />}
      variant="ghost"
      colorScheme="green"
      size="sm"
      onClick={onShare}
      {...props}
    >
      Share
    </EnhancedButton>
  );
};

export const FloatingActionButtons = ({ product, onAddToCart, onQuickView, onShare, isLiked, onToggleLike }) => {
  return (
    <MotionBox
      position="absolute"
      top="10px"
      right="10px"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
    >
      <VStack spacing={2}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <WishlistButton 
            isLiked={isLiked} 
            onToggle={onToggleLike}
            size="xs"
            borderRadius="full"
            minW="auto"
            h="35px"
            w="35px"
          />
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <QuickViewButton 
            onQuickView={onQuickView}
            size="xs"
            borderRadius="full"
            minW="auto"
            h="35px"
            w="35px"
          />
        </motion.div>
        
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ShareButton 
            onShare={onShare}
            size="xs"
            borderRadius="full"
            minW="auto"
            h="35px"
            w="35px"
          />
        </motion.div>
      </VStack>
    </MotionBox>
  );
};

export const ProductCardActions = ({ product, onAddToCart, onQuickView, isLiked, onToggleLike }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <VStack spacing={3} mt={4}>
        <AddToCartButton 
          product={product}
          onAddToCart={onAddToCart}
          width="100%"
        />
        
        <HStack spacing={2} width="100%">
          <WishlistButton 
            isLiked={isLiked}
            onToggle={onToggleLike}
            flex="1"
          />
          <QuickViewButton 
            onQuickView={onQuickView}
            flex="1"
          />
        </HStack>
      </VStack>
    </MotionBox>
  );
};

export default EnhancedButton;
