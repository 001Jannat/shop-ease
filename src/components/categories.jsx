import React from "react";
import { Box, Image, Text, SimpleGrid, Heading } from "@chakra-ui/react";

const categories = [
  {
    id: 1,
    name: "Kurtas & Kurta Sets",
    image: "https://clothsvilla.com/cdn/shop/products/party-wear-gaji-silk-printed-plazo-kurti-set-by-looknbook-art_1000x.jpg?v=1680884148",
  },
  {
    id: 2,
    name: "Sarees",
    image: "https://clothsvilla.com/cdn/shop/products/party-wear-gaji-silk-printed-plazo-kurti-set-by-looknbook-art_1000x.jpg?v=1680884148",
  },
  {
    id: 3,
    name: "Dresses",
    image: "https://clothsvilla.com/cdn/shop/products/party-wear-gaji-silk-printed-plazo-kurti-set-by-looknbook-art_1000x.jpg?v=1680884148",
  },
  {
    id: 4,
    name: "Flats & Heels",
    image: "https://clothsvilla.com/cdn/shop/products/party-wear-gaji-silk-printed-plazo-kurti-set-by-looknbook-art_1000x.jpg?v=1680884148",
  },
  {
    id: 5,
    name: "Handbags",
    image: "https://clothsvilla.com/cdn/shop/products/party-wear-gaji-silk-printed-plazo-kurti-set-by-looknbook-art_1000x.jpg?v=1680884148",
  },
  {
    id: 6,
    name: "Shorts",
    image: "https://clothsvilla.com/cdn/shop/products/party-wear-gaji-silk-printed-plazo-kurti-set-by-looknbook-art_1000x.jpg?v=1680884148",
  },
];

const CategoryList = () => {
return (
    <Box py={8} px={7}>
        <Heading as="h2" size="lg" textAlign="center" mb={8} color="gray.600">
            CATEGORIES TO BAG
        </Heading>
        <SimpleGrid columns={[1, 2, 3, 6]} spacing={8}>
            {categories.map((category) => (
                <Box
                    key={category.id}
                    textAlign="center"
                    bg="blue.50"
                    p={4}
                    borderRadius="md"
                    boxShadow="md"
                >
                    <Box
                        bgGradient="linear(to-t, pink.300, orange.300, blue.200 , red.300, yellow.300, black, blue.200)"
                        borderRadius="full"
                        p={1}
                        mb={4}
                    >
                        <Image
                            src={category.image}
                            alt={category.name}
                            borderRadius="full"
                            boxSize="150px"
                            mx="auto"
                        />
                    </Box>
                    <Text fontWeight="bold" fontSize="lg" color="gray.700">
                        {category.name}
                    </Text>
                </Box>
            ))}
        </SimpleGrid>
    </Box>
);
};

export default CategoryList;
