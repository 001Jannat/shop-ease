import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Box, Image, Text, Badge, Stack, Link, useToast, VStack } from "@chakra-ui/react";
import { ProductCardSkeleton } from "./loading/EnhancedLoadingStates";
import { FloatingActionButtons, AddToCartButton } from "./ui/EnhancedButtons";
import { useCart } from "./cart/ShoppingCart";

const MotionBox = motion(Box);
const MotionImage = motion(Image);

const ProductCard = ({ product, index = 0 }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const toast = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800 + index * 100); // Staggered loading

    return () => clearTimeout(timer);
  }, [index]);

  useEffect(() => {
    const likes = JSON.parse(localStorage.getItem("likes")) || [];
    if (likes.includes(product.id)) {
      setIsLiked(true);
    }
  }, [product.id]);

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const likes = JSON.parse(localStorage.getItem("likes")) || [];

    if (isLiked) {
      const newLikes = likes.filter((id) => id !== product.id);
      localStorage.setItem("likes", JSON.stringify(newLikes));
      setIsLiked(false);
      toast({
        title: "Removed from wishlist",
        status: "info",
        duration: 1500,
        isClosable: true,
        position: "bottom-right",
      });
    } else {
      likes.push(product.id);
      localStorage.setItem("likes", JSON.stringify([...new Set(likes)]));
      setIsLiked(true);
      toast({
        title: "Added to wishlist ❤️",
        status: "success",
        duration: 1500,
        isClosable: true,
        position: "bottom-right",
      });
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  const handleQuickView = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toast({
      title: "Quick View",
      description: "Quick view feature coming soon!",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleShare = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href + `product/${product.id}`,
      });
    } else {
      navigator.clipboard.writeText(window.location.href + `product/${product.id}`);
      toast({
        title: "Link copied!",
        description: "Product link copied to clipboard",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  if (isLoading) {
    return <ProductCardSkeleton />;
  }

  return (
    <Link href={`/product/${product.id}`} _hover={{ textDecoration: "none" }}>
      <MotionBox
        borderWidth="2px"
        borderRadius="xl"
        overflow="hidden"
        bg="white"
        boxShadow="md"
        mb="5"
        maxW={["90%", "80%", "60%", "280px"]}
        mx="auto"
        position="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5,
          delay: index * 0.1,
          type: "spring",
          stiffness: 100
        }}
        whileHover={{
          y: -8,
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          borderColor: "purple.200"
        }}
        _hover={{
          transform: "none",
        }}
      >
        {/* Floating Action Buttons */}
        {isHovered && (
          <FloatingActionButtons
            product={product}
            onAddToCart={handleAddToCart}
            onQuickView={handleQuickView}
            onShare={handleShare}
            isLiked={isLiked}
            onToggleLike={handleLike}
          />
        )}

        <Box p="3" position="relative" overflow="hidden">
          <MotionImage
            src={product.photos[0]}
            alt={product.name}
            borderRadius="md"
            width="100%"
            height="250px"
            objectFit="cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            fallbackSrc="https://via.placeholder.com/280x250?text=Loading..."
            loading="lazy"
          />
        </Box>

        <Box p="4">
          {product.discount && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <Badge
                borderRadius="full"
                px="3"
                py="1"
                colorScheme="red"
                fontSize="xs"
                mb="3"
                fontWeight="bold"
              >
                {product.discount}% OFF
              </Badge>
            </motion.div>
          )}
          
          <VStack spacing="3" align="stretch">
            <Text
              fontWeight="bold"
              fontSize="md"
              lineHeight="tight"
              noOfLines={2}
              color="gray.800"
              minH="40px"
            >
              {product.name}
            </Text>
            
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <VStack align="start" spacing="1">
                <Text
                  fontSize="xl"
                  fontWeight="bold"
                  color="purple.600"
                >
                  ₹{product.price}
                </Text>
                {product.originalPrice && (
                  <Text
                    fontSize="sm"
                    textDecoration="line-through"
                    color="gray.500"
                  >
                    ₹{product.originalPrice}
                  </Text>
                )}
              </VStack>
              
              {product.discount && (
                <Text
                  fontSize="sm"
                  color="green.600"
                  fontWeight="semibold"
                >
                  Save ₹{(product.originalPrice - product.price).toFixed(0)}
                </Text>
              )}
            </Stack>

            {/* Add to Cart Button - Visible on Hover */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                y: isHovered ? 0 : 10 
              }}
              transition={{ duration: 0.3 }}
              style={{
                display: isHovered ? 'block' : 'none'
              }}
            >
              <AddToCartButton
                product={product}
                onAddToCart={handleAddToCart}
                size="sm"
                width="100%"
                mt={2}
              />
            </motion.div>
          </VStack>
        </Box>
      </MotionBox>
    </Link>
  );
};

export default ProductCard;
