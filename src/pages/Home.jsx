import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Banner,ProductList,CategoryList } from '../components';
const Home = () => {
  return (
    <Flex direction="column">
      <Banner />
      <CategoryList />
      <ProductList />
    </Flex>
  );
};

export default Home;
