import React, { useState, useEffect } from "react";
import { Box, Image, Text, Badge, Stack, Link, useToast, VStack, IconButton } from "@chakra-ui/react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import LoadingSkeleton from "./loading/LoadingSkeleton";

const ProductCard = ({ product, index = 0 }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const toast = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800 + index * 100);

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
    toast({
      title: "Added to cart! 🛒",
      description: `${product.name} has been added to your cart.`,
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "bottom-right",
    });
  };

  if (isLoading) {
    return (
      <LoadingSkeleton height="350px" width={["90%", "80%", "60%", "280px"]} />
    );
  }

  return (
    <Link href={`/product/${product.id}`} _hover={{ textDecoration: "none" }}>
      <Box
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
        transition="all 0.3s ease"
        _hover={{
          transform: "translateY(-8px)",
          boxShadow: "xl",
          borderColor: "purple.200"
        }}
      >
        {/* Action Buttons */}
        {isHovered && (
          <Box
            position="absolute"
            top="10px"
            right="10px"
            zIndex="2"
          >
            <VStack spacing={2}>
              <IconButton
                aria-label="Add to wishlist"
                icon={<FaHeart />}
                size="sm"
                borderRadius="full"
                colorScheme={isLiked ? "red" : "gray"}
                variant={isLiked ? "solid" : "outline"}
                onClick={handleLike}
                bg={isLiked ? "red.500" : "white"}
                color={isLiked ? "white" : "red.500"}
                _hover={{ transform: "scale(1.1)" }}
                transition="all 0.2s"
              />
              <IconButton
                aria-label="Add to cart"
                icon={<FaShoppingCart />}
                size="sm"
                borderRadius="full"
                colorScheme="purple"
                onClick={handleAddToCart}
                _hover={{ transform: "scale(1.1)" }}
                transition="all 0.2s"
              />
            </VStack>
          </Box>
        )}

        <Box p="3" position="relative" overflow="hidden">
          <Image
            src={product.photos[0]}
            alt={product.name}
            borderRadius="md"
            width="100%"
            height="250px"
            objectFit="cover"
            transition="transform 0.3s ease"
            _hover={{ transform: "scale(1.05)" }}
            fallbackSrc="https://via.placeholder.com/280x250?text=Loading..."
            loading="lazy"
          />
        </Box>

        <Box p="4">
          {product.discount && (
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
          </VStack>
        </Box>
      </Box>
    </Link>
  );
};

export default ProductCard;
