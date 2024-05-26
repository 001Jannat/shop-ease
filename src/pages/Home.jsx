import React from 'react';
import { Box } from '@chakra-ui/react';
import { Banner,ProductList } from '../components';
const Home = () => {
  return (
    <Box>
      <Banner />
      <ProductList />
    </Box>
  );
};

export default Home;
