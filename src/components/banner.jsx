import React, { useEffect, useState } from 'react';
import { Box, Image } from '@chakra-ui/react';
import Slider from 'react-slick';
import bannerData from '../assets/banner.json';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {LoadingSkeleton} from '.';

const Banner = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout();
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
    <Box mb={4}>
      <Slider {...settings}>
        {bannerData.map((banner) => (
          <Box key={banner.id}>
            <Image src={banner.image} alt={banner.alt} borderRadius="md" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Banner;
