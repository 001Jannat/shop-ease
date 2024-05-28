import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid } from '@chakra-ui/react';
import ProductCard from './ProductCard';
import productsData from '../assets/products.json';
import {Pagination} from '.';

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
    <Box pl={[0, 4, 8]} py={4}>
      <SimpleGrid columns={[1, 2, 4]} spacing="15px">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </SimpleGrid>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Box>
  );
};

export default ProductList;
