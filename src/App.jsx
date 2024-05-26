
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { Header,Footer,ProductDetail } from './components';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <Flex direction="column" minH="100vh">
      <Router>
        <Header />
        <Flex direction="column" flex="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Flex>
        <Footer /> 
      </Router>
    </Flex>
  );
}

export default App;
