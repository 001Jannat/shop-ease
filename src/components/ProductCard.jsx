import React, { useState, useEffect } from "react";
import { Box, Image, Text, Badge, Stack, Link } from "@chakra-ui/react";
import LoadingSkeleton from "./loading/LoadingSkeleton";
import LikeButton from "./like/likeButton";

const ProductCard = ({ product }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const likes = JSON.parse(localStorage.getItem("likes")) || [];
    if (likes.includes(product.id)) {
      setIsLiked(true);
    }
  }, [product.id]);

  const handleLike = (e) => {
    e.preventDefault();
    const likes = JSON.parse(localStorage.getItem("likes")) || [];

    if (isLiked) {
      const newLikes = likes.filter((id) => id !== product.id);
      localStorage.setItem("likes", JSON.stringify(newLikes));
      setIsLiked(false);
    } else {
      likes.push(product.id);
      localStorage.setItem("likes", JSON.stringify([...new Set(likes)]));
      setIsLiked(true);
    }
  };

  if (isLoading) {
    return (
      <LoadingSkeleton height="300px" width={["90%", "80%", "60%", "280px"]} />
    );
  }

  return (
    <Link href={`/product/${product.id}`}>
      <Box
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        bg="blue.50"
        boxShadow="md"
        mb="5"
        maxW={["90%", "80%", "60%", "280px"]}
        mx="auto"
        position="relative"
        transition="all 0.3s"
        _hover={{
          transform: "scale(1.05)",
          boxShadow: "lg",
        }}
      >
        <Box p="3" position="relative">
          <Image
            src={product.photos[0]}
            alt={product.name}
            borderRadius="md"
            width="100vh"
            height="300px"
            objectFit="cover" 
          />
          <Box position="absolute" bottom="2" right="2" zIndex="2">
            <LikeButton onLike={handleLike} isLiked={isLiked} />
          </Box>
        </Box>
        <Box p="1">
          {product.discount && (
            <Badge
              borderRadius="full"
              px="2"
              colorScheme="teal"
              fontSize="sm"
              mb="2"
            >
              {product.discount}% OFF
            </Badge>
          )}
          <Stack spacing="2">
            <Text
              fontWeight="semibold"
              fontSize="sm"
              lineHeight="tight"
              isTruncated
            >
              {product.name}
            </Text>
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="baseline"
            >
              <Text
                color="gray.600"
                fontSize="xs"
                textDecoration="line-through"
              >
                ₹{product.originalPrice}
              </Text>
              <Text color="black" fontSize="sm" ml="1">
                ₹{product.price}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Link>
  );
};

export default ProductCard;
