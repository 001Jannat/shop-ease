import React, { useState, useContext, createContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Flex,
  Text,
  IconButton,
  Badge,
  VStack,
  HStack,
  Image,
  Button,
  useToast,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Divider,
} from '@chakra-ui/react';
import { FaShoppingCart, FaTrash, FaPlus, FaMinus } from 'react-icons/fa';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const toast = useToast();

  const addToCart = (product, quantity = 1) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevItems, { ...product, quantity }];
    });

    toast({
      title: 'Added to cart!',
      description: `${product.name} has been added to your cart.`,
      status: 'success',
      duration: 2000,
      isClosable: true,
      position: 'bottom-right',
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const MotionBox = motion(Box);

export const CartButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartItems, getTotalItems } = useCart();

  return (
    <>
      <Box position="relative">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <IconButton
            aria-label="Shopping cart"
            icon={<FaShoppingCart />}
            onClick={onOpen}
            variant="ghost"
            fontSize="20px"
            color="purple.500"
            _hover={{ color: 'purple.600', bg: 'purple.50' }}
          />
        </motion.div>
        {getTotalItems() > 0 && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
            }}
          >
            <Badge
              borderRadius="full"
              colorScheme="red"
              fontSize="xs"
              minW="20px"
              h="20px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {getTotalItems()}
            </Badge>
          </motion.div>
        )}
      </Box>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <Text fontSize="xl" fontWeight="bold" color="purple.600">
              Shopping Cart ({getTotalItems()} items)
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <CartDrawerContent onClose={onClose} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const CartDrawerContent = ({ onClose }) => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        textAlign="center"
        py={10}
      >
        <Text fontSize="lg" color="gray.500">
          Your cart is empty
        </Text>
        <Text fontSize="sm" color="gray.400" mt={2}>
          Add some products to get started!
        </Text>
      </MotionBox>
    );
  }

  return (
    <VStack spacing={4} align="stretch">
      <AnimatePresence>
        {cartItems.map((item) => (
          <MotionBox
            key={item.id}
            layout
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <CartItem
              item={item}
              onRemove={() => removeFromCart(item.id)}
              onUpdateQuantity={(newQuantity) => updateQuantity(item.id, newQuantity)}
            />
          </MotionBox>
        ))}
      </AnimatePresence>

      <Divider />

      <Flex justify="space-between" align="center" fontSize="xl" fontWeight="bold">
        <Text>Total:</Text>
        <Text color="purple.600">₹{getTotalPrice().toFixed(2)}</Text>
      </Flex>

      <VStack spacing={3}>
        <Button
          colorScheme="purple"
          size="lg"
          width="100%"
          leftIcon={<FaShoppingCart />}
          _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
          transition="all 0.2s"
        >
          Proceed to Checkout
        </Button>
        
        <Button
          variant="outline"
          colorScheme="red"
          size="sm"
          onClick={clearCart}
          width="100%"
        >
          Clear Cart
        </Button>
      </VStack>
    </VStack>
  );
};

const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <MotionBox
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      bg="gray.50"
      whileHover={{ boxShadow: "md" }}
    >
      <Flex gap={4}>
        <Image
          src={item.photos[0]}
          alt={item.name}
          boxSize="60px"
          objectFit="cover"
          borderRadius="md"
        />
        
        <VStack align="start" flex="1" spacing={2}>
          <Text fontWeight="semibold" fontSize="sm" noOfLines={2}>
            {item.name}
          </Text>
          
          <HStack justify="space-between" width="100%">
            <Text fontSize="lg" fontWeight="bold" color="purple.600">
              ₹{item.price}
            </Text>
            
            <HStack>
              <IconButton
                aria-label="Decrease quantity"
                icon={<FaMinus />}
                size="xs"
                onClick={() => onUpdateQuantity(item.quantity - 1)}
                isDisabled={item.quantity <= 1}
              />
              
              <Text fontWeight="semibold" minW="30px" textAlign="center">
                {item.quantity}
              </Text>
              
              <IconButton
                aria-label="Increase quantity"
                icon={<FaPlus />}
                size="xs"
                onClick={() => onUpdateQuantity(item.quantity + 1)}
              />
              
              <IconButton
                aria-label="Remove item"
                icon={<FaTrash />}
                size="xs"
                colorScheme="red"
                variant="ghost"
                onClick={onRemove}
                ml={2}
              />
            </HStack>
          </HStack>
        </VStack>
      </Flex>
    </MotionBox>
  );
};
