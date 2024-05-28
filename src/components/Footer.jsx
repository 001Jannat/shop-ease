import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Text,
  Link,
  Image,
  Stack,
  Flex,
  Grid,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import LoadingSkeleton from "./loading/LoadingSkeleton";

const Footer = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSkeleton height="400px" width="100%" />;
  }

  return (
    <Box bg="gray.100" py={8} mt="auto">
      <Container maxW="6xl">
        <Grid templateColumns="repeat(2, 1fr)" gap={6} mt={20} mb={20}>
          <Container
            textAlign="center"
            p={4}
            borderRadius="full"
            boxShadow="md"
            bg="transparent"
          >
            <Text fontWeight="bold">100% ORIGINAL</Text>
            <Text>guarantee for all products at shopease.com</Text>
          </Container>
          <Container
            textAlign="center"
            p={4}
            borderRadius="full"
            boxShadow="md"
            bg="transparent"
          >
            <Text fontWeight="bold">Return within 14 days</Text>
            <Text>of receiving your order</Text>
          </Container>
        </Grid>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align="flex-start">
            <Text fontWeight="bold">ONLINE SHOPPING</Text>
            <Link href="/men">Men</Link>
            <Link href="/women">Women</Link>
            <Link href="/beauty">Beauty</Link>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="bold">CUSTOMER POLICIES</Text>
            <Link href="/contact-us">Contact Us</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/terms">T&C</Link>
            <Link href="/terms-of-use">Terms Of Use</Link>
            <Link href="/track-orders">Track Orders</Link>
            <Link href="/shipping">Shipping</Link>
            <Link href="/cancellation">Cancellation</Link>
            <Link href="/returns">Returns</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/grievance-officer">Grievance Officer</Link>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="bold">EXPERIENCE SHOP EASE APP ON MOBILE</Text>
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
            <Text fontWeight="bold" mt={4}>
              KEEP IN TOUCH
            </Text>
            <Stack direction="row" spacing={4}>
              <Link href="https://facebook.com" isExternal>
                <FaFacebook size="24px" />
              </Link>
              <Link href="https://twitter.com" isExternal>
                <FaTwitter size="24px" />
              </Link>
              <Link href="https://youtube.com" isExternal>
                <FaYoutube size="24px" />
              </Link>
              <Link href="https://instagram.com" isExternal>
                <FaInstagram size="24px" />
              </Link>
            </Stack>
          </Stack>
          <Stack align="flex-start">
            <Text fontWeight="bold">USEFUL LINKS</Text>
            <Link href="/blog">Blog</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/site-map">Site Map</Link>
            <Link href="/corporate-information">Corporate Information</Link>
            <Link href="/whitehat">Whitehat</Link>
            <Link href="/cleartrip">Cleartrip</Link>
          </Stack>
        </SimpleGrid>
        <Box mt={10}>
          <Grid templateColumns="repeat(3, 1fr)" gap={10}>
            <Link href="/contact-us">In case of any concern, Contact Us</Link>
            <Text>© 2024 www.shopease.com. All rights reserved.</Text>
            <Text>A ShopEase Company</Text>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
