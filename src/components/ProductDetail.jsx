import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Image, Text, Button, SimpleGrid, Stack } from "@chakra-ui/react";
import productsData from "../assets/products.json";
import LoadingSkeleton from "./loading/LoadingSkeleton";
import ChatButton from "./chatButton";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === id);

  if (!product) return <Text>Product not found</Text>;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout();
  }, []);

  if (isLoading) {
    return <LoadingSkeleton height="700px" width="50%" />;
  }

  return (
    <>
      <Box p="80px">
        <SimpleGrid columns={[1, 2]} spacing="40px">
          <Stack spacing="4">
            {product.photos.map((photo) => (
              <Image key={photo} src={photo} alt={product.name} />
            ))}
          </Stack>
          <Box>
            <Text fontSize="2xl" fontWeight="bold">
              {product.name}
            </Text>
            <Text fontSize="lg" color="gray.600" textDecoration="line-through">
              ₹{product.originalPrice}
            </Text>
            <Text fontSize="2xl" color="black">
              ₹{product.price}
            </Text>

            <ChatButton title={product.name} price={product.price} />

            <Box mt="4">
              <Text fontSize="lg" fontWeight="bold">
                Description
              </Text>
              <Text>{product.description}</Text>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>
    </>
  );
};

export default ProductDetail;
