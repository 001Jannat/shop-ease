import React from 'react';
import { motion } from 'framer-motion';
import { Box, IconButton, VStack, Tooltip, useColorModeValue } from '@chakra-ui/react';
import { FaShoppingCart, FaPlus } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionIconButton = motion(IconButton);

const FloatingActionButton = ({ 
  icon = <FaPlus />, 
  label = "Action",
  onClick,
  colorScheme = "purple",
  position = { bottom: "20px", right: "20px" },
  size = "lg",
  ...props 
}) => {
  const bg = useColorModeValue(`${colorScheme}.500`, `${colorScheme}.600`);
  const hoverBg = useColorModeValue(`${colorScheme}.600`, `${colorScheme}.500`);

  return (
    <MotionBox
      position="fixed"
      bottom={position.bottom}
      right={position.right}
      zIndex="1000"
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 260, 
        damping: 20,
        delay: 1
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      {...props}
    >
      <Tooltip label={label} placement="left" hasArrow>
        <MotionIconButton
          aria-label={label}
          icon={icon}
          size={size}
          borderRadius="full"
          bg={bg}
          color="white"
          boxShadow="xl"
          _hover={{ bg: hoverBg }}
          onClick={onClick}
          animate={{
            boxShadow: [
              "0 4px 8px rgba(0,0,0,0.1)",
              "0 8px 16px rgba(0,0,0,0.15)",
              "0 4px 8px rgba(0,0,0,0.1)"
            ]
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        />
      </Tooltip>
    </MotionBox>
  );
};

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <FloatingActionButton
      icon={<FaShoppingCart />}
      label="Scroll to top"
      onClick={scrollToTop}
      position={{ bottom: "80px", right: "20px" }}
      colorScheme="blue"
    />
  );
};

export const CartFloatingButton = ({ onClick, itemCount = 0 }) => {
  return (
    <MotionBox position="relative">
      <FloatingActionButton
        icon={<FaShoppingCart />}
        label={`Cart (${itemCount} items)`}
        onClick={onClick}
        colorScheme="purple"
      />
      {itemCount > 0 && (
        <MotionBox
          position="absolute"
          top="-5px"
          right="-5px"
          bg="red.500"
          color="white"
          borderRadius="full"
          minW="20px"
          h="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="xs"
          fontWeight="bold"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          {itemCount > 99 ? '99+' : itemCount}
        </MotionBox>
      )}
    </MotionBox>
  );
};

export default FloatingActionButton;
