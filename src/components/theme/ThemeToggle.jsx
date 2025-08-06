import React from 'react';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionIconButton = motion(IconButton);

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  const iconColor = useColorModeValue('purple.500', 'yellow.400');

  return (
    <MotionIconButton
      aria-label="Toggle theme"
      icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
      onClick={toggleColorMode}
      bg={bgColor}
      color={iconColor}
      size="md"
      borderRadius="full"
      whileHover={{ 
        scale: 1.1, 
        rotate: 360,
        boxShadow: "0 0 20px rgba(138, 43, 226, 0.6)"
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      _hover={{
        bg: useColorModeValue('purple.100', 'yellow.100'),
      }}
    />
  );
};

export default ThemeToggle;
