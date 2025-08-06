
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import Home from './pages/Home';
import { Header, Footer, ProductDetail } from './components';
import { Flex } from '@chakra-ui/react';

// Custom theme with purple accent
const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    purple: {
      50: '#faf5ff',
      100: '#f3e8ff',
      200: '#e9d5ff',
      300: '#d8b4fe',
      400: '#c084fc',
      500: '#a855f7',
      600: '#8A2BE2',
      700: '#7c3aed',
      800: '#6b21a8',
      900: '#581c87',
    },
  },
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.900' : 'gray.50',
      },
    }),
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Flex direction="column" minH="100vh" maxW="screen" position="relative">
        <Router>
          <Header />
          <Flex direction="column" flex="1" position="relative" zIndex="1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </Flex>
          <Footer /> 
        </Router>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
