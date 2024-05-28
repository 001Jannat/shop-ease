import React, { useEffect, useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import bannerData from '../assets/banner.json';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { LoadingSkeleton } from '.';

const Banner = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSkeleton height="200px" width="100%" />; 
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box mb={4} maxW="100vw" height="500px" overflow="hidden">
      <Slider {...settings}>
        {bannerData.map((banner) => (
          <Box key={banner.id} width="100%" height="500px">
            <Image 
              src={banner.image} 
              alt={banner.alt} 
              borderRadius="md" 
              width="100%" 
              height="100%" 
              objectFit="cover"
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Banner;
