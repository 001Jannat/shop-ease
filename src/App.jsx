import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <Flex direction="column"  minH="100vh">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
    </Flex>
  );
}

export default App;
