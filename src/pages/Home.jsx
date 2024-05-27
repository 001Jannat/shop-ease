import React from 'react';
import { Box } from '@chakra-ui/react';
import { Banner,ProductList,CategoryList } from '../components';
const Home = () => {
  return (
    <Box>
      <Banner />
      <CategoryList />
      <ProductList />
    </Box>
  );
};

export default Home;
