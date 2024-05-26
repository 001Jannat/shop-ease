
import React from 'react';
import { Box, Container, SimpleGrid, Text, Link, Image, Stack, Flex, Grid } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {

  return (
    <Box bg="gray.100" py={8} mt="auto">
      <Container maxW="6xl">
      <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={20} mb={20}>
      <Container textAlign="center" p={4} borderRadius="full" boxShadow="md" bg="transparent">
          <Text fontWeight="bold">100% ORIGINAL</Text>
          <Text>guarantee for all products at myntra.com</Text>
        </Container>
        <Container textAlign="center" p={4} borderRadius="full" boxShadow="md" bg="transparent">
          <Text fontWeight="bold">Return within 14 days</Text>
          <Text>of receiving your order</Text>
        </Container>
      </Grid>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align="flex-start">
            <Text fontWeight="bold">ONLINE SHOPPING</Text>
            <Link as={RouterLink} to="/men">Men</Link>
            <Link as={RouterLink} to="/women">Women</Link>
            <Link as={RouterLink} to="/kids">Kids</Link>
            <Link as={RouterLink} to="/home-living">Home & Living</Link>
            <Link as={RouterLink} to="/beauty">Beauty</Link>
            <Link as={RouterLink} to="/gift-cards">Gift Cards</Link>
            <Link as={RouterLink} to="/myntra-insider">Myntra Insider</Link>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="bold">CUSTOMER POLICIES</Text>
            <Link as={RouterLink} to="/contact-us">Contact Us</Link>
            <Link as={RouterLink} to="/faq">FAQ</Link>
            <Link as={RouterLink} to="/terms">T&C</Link>
            <Link as={RouterLink} to="/terms-of-use">Terms Of Use</Link>
            <Link as={RouterLink} to="/track-orders">Track Orders</Link>
            <Link as={RouterLink} to="/shipping">Shipping</Link>
            <Link as={RouterLink} to="/cancellation">Cancellation</Link>
            <Link as={RouterLink} to="/returns">Returns</Link>
            <Link as={RouterLink} to="/privacy-policy">Privacy Policy</Link>
            <Link as={RouterLink} to="/grievance-officer">Grievance Officer</Link>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="bold">EXPERIENCE MYNTRA APP ON MOBILE</Text>
            <Stack direction="row" spacing={4}>
              <Link href="https://play.google.com/store" isExternal>
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  boxSize="120px"
                />
              </Link>
              <Link href="https://www.apple.com/app-store/" isExternal>
                <Image
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  boxSize="120px"
                />
              </Link>
            </Stack>
            <Text fontWeight="bold" mt={4}>KEEP IN TOUCH</Text>
            <Stack direction="row" spacing={4}>
              <Link href="https://facebook.com" isExternal><FaFacebook size="24px" /></Link>
              <Link href="https://twitter.com" isExternal><FaTwitter size="24px" /></Link>
              <Link href="https://youtube.com" isExternal><FaYoutube size="24px" /></Link>
              <Link href="https://instagram.com" isExternal><FaInstagram size="24px" /></Link>
            </Stack>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="bold">USEFUL LINKS</Text>
            <Link as={RouterLink} to="/blog">Blog</Link>
            <Link as={RouterLink} to="/careers">Careers</Link>
            <Link as={RouterLink} to="/site-map">Site Map</Link>
            <Link as={RouterLink} to="/corporate-information">Corporate Information</Link>
            <Link as={RouterLink} to="/whitehat">Whitehat</Link>
            <Link as={RouterLink} to="/cleartrip">Cleartrip</Link>
          </Stack>
        </SimpleGrid> 
        <Box mt={10}>
       
            <Grid templateColumns="repeat(3, 1fr)" gap={10}>
              <Link as={RouterLink} to="/contact-us">In case of any concern, Contact Us</Link>
              <Text>© 2024 www.shopease.com. All rights reserved.</Text>
              <Text>A ShopEase Company</Text>
            </Grid>
        
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
