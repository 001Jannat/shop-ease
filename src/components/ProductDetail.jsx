import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, Button, SimpleGrid, Stack } from '@chakra-ui/react';
import productsData from '../assets/products.json';

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find(p => p.id === id);

  if (!product) return <Text>Product not found</Text>;

  return (
    <Box p="20px">
      <SimpleGrid columns={[1, 2]} spacing="40px">
        <Stack spacing="4">
          {product.photos.map(photo => (
            <Image key={photo} src={photo} alt={product.name} />
          ))}
        </Stack>
        <Box>
          <Text fontSize="2xl" fontWeight="bold">{product.name}</Text>
          <Text fontSize="lg" color="gray.600" textDecoration="line-through">
            ₹{product.originalPrice}
          </Text>
          <Text fontSize="2xl" color="black">₹{product.price}</Text>
          <Button
            as="a"
            href={`https://wa.me/918787878787?text=Hey, I am interested in buying ${product.name}-${product.price}`}
            colorScheme="teal"
            mt="10px"
          >
            Inquire on Whatsapp
          </Button>
          <Box mt="4">
            <Text fontSize="lg" fontWeight="bold">Description</Text>
            <Text>{product.description}</Text>
          </Box>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ProductDetail;
