import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  SimpleGrid,
  Stack,
  Button,
  RadioGroup,
  Radio,
  Badge,
  HStack,
  Center,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import productsData from "../assets/products.json";
import LoadingSkeleton from "./loading/LoadingSkeleton";
import ChatButton from "./chatButton";
import ProductCard from "./ProductCard";
import { Pagination } from ".";

const ProductDetail = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === id);

  if (!product) return <Text>Product not found</Text>;

  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].size);
  const [sizes, setSizes] = useState(product.sizes);
  const itemsPerPage = 4;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const otherProducts = productsData.filter((p) => p.id !== id);
  const totalPages = Math.ceil(otherProducts.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOtherProducts = otherProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (isLoading) {
    return <LoadingSkeleton height="700px" width="50%" />;
  }

  const handleSizeChange = (value) => {
    setSelectedSize(value);
  };

  const selectedSizeDetails = sizes.find((size) => size.size === selectedSize);

  return (
    <>
      <Box p="80px" overflow="hidden">
        <SimpleGrid columns={[1, 2]} spacing="40px">
          <Stack spacing="4">
            {product.photos.map((photo) => (
              <Image
                key={photo}
                src={photo}
                alt={product.name}
                borderRadius="md"
              />
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
            <Text fontSize="md" color="gray.600">
              inclusive of all taxes
            </Text>
            <Text fontSize="md" color="gray.600">
              4.2 <StarIcon color="yellow" /> {product.ratingsCount} Ratings
            </Text>

            <Box mt="4">
              <Text fontSize="lg" fontWeight="bold">
                Select Size
              </Text>
              <RadioGroup onChange={handleSizeChange} value={selectedSize}>
                <Stack direction="row">
                  {sizes.map((size) => (
                    <Radio key={size.size} value={size.size}>
                      {size.size}{" "}
                      {size.stock === 1 ? (
                        <Badge colorScheme="red">1 left</Badge>
                      ) : null}
                    </Radio>
                  ))}
                </Stack>
              </RadioGroup>
              <Button
                mt="4"
                colorScheme="pink"
                leftIcon={<FaShoppingBag color="white" />}
              >
                ADD TO BAG
              </Button>
              <Button
                mt="4"
                ml="4"
                variant="outline"
                colorScheme="pink"
                leftIcon={<FaHeart color="red" />}
              >
                WISHLIST
              </Button>
            </Box>

            <ChatButton title={product.name} price={product.price} />

            <Box mt="4">
              <Text fontSize="lg" fontWeight="bold">
                Description
              </Text>
              <Text>{product.description}</Text>
            </Box>
            <HStack p={2} display="flex" alignItems="center" gap={5}>
            {product?.other_images &&
              product?.other_images.map((image, index) => (
                <Image
                  src={image}
                  alt="other images"
                  mt={10}
                  minW="200px"
                  minH="200px"
                  boxSize="100px"
                  objectFit="cover"
                  borderRadius="md"
                  cursor="pointer"
                  _hover={{
                    opacity: 0.8,
                    transform: "scale(1.05)",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
              </HStack>
          </Box>
        </SimpleGrid>

        <Box mt="20">
          <Text fontSize="2xl" fontWeight="bold" mb="4" textColor="gray.700">
            Other Products
          </Text>
          <SimpleGrid columns={[1, 2, 3, 4]} spacing="10">
            {currentOtherProducts.map((otherProduct) => (
              <ProductCard key={otherProduct.id} product={otherProduct} />
            ))}
          </SimpleGrid>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </Box>
      </Box>
    </>
  );
};

export default ProductDetail;
