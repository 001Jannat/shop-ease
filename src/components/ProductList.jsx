import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Flex } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import productsData from '../assets/products.json';
import { Pagination } from '.';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setProducts(productsData);
  }, []);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  return (
    <Box px={[2, 4, 8]} py={4} mx="auto" maxW="1600px">
      <Flex justify="center">
        <SimpleGrid columns={[1, 2, 4]} spacing="10" width="100%">
          {currentProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      </Flex>
      <Flex justify="center" mt={4}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Flex>
    </Box>
  );
};

export default ProductList;
