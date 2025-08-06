import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Box,
  Grid,
  Text,
  VStack,
  HStack,
  Tag,
  TagLabel,
  TagCloseButton,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Button,
  Flex,
  Spacer,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaSearch, FaFilter, FaTimes, FaSort } from 'react-icons/fa';
import { ProductCardSkeleton } from '../loading/EnhancedLoadingStates';

const MotionBox = motion(Box);
const MotionGrid = motion(Grid);

const AdvancedSearch = ({ 
  products, 
  onFilteredResults, 
  isLoading = false,
  categories = [],
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [activeFilters, setActiveFilters] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // Filter and sort logic
  React.useEffect(() => {
    let filtered = products;

    // Text search
    if (searchQuery) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory) {
      filtered = filtered.filter(product => product.type === selectedCategory);
    }

    // Price range filter
    filtered = filtered.filter(product => {
      const price = parseFloat(product.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });

    // Sort
    filtered.sort((a, b) => {
      let valueA, valueB;
      
      switch (sortBy) {
        case 'price':
          valueA = parseFloat(a.price);
          valueB = parseFloat(b.price);
          break;
        case 'name':
          valueA = a.name.toLowerCase();
          valueB = b.name.toLowerCase();
          break;
        case 'discount':
          valueA = parseInt(a.discount || 0);
          valueB = parseInt(b.discount || 0);
          break;
        default:
          valueA = a.name.toLowerCase();
          valueB = b.name.toLowerCase();
      }

      if (sortOrder === 'asc') {
        return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
      } else {
        return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
      }
    });

    onFilteredResults(filtered);
  }, [searchQuery, selectedCategory, priceRange, sortBy, sortOrder, products, onFilteredResults]);

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setPriceRange([0, 10000]);
    setSortBy('name');
    setSortOrder('asc');
    setActiveFilters([]);
  };

  const addFilter = (type, value) => {
    const newFilter = { type, value };
    setActiveFilters(prev => [...prev, newFilter]);
  };

  const removeFilter = (index) => {
    setActiveFilters(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <MotionBox
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      p={6}
      mb={6}
      boxShadow="md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <VStack spacing={6} align="stretch">
        {/* Search Bar */}
        <InputGroup size="lg">
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.300" />
          </InputLeftElement>
          <Input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            borderRadius="full"
            bg="gray.50"
            _focus={{
              bg: 'white',
              borderColor: 'purple.400',
              boxShadow: '0 0 0 1px #8A2BE2',
            }}
          />
        </InputGroup>

        {/* Filter Toggle */}
        <Flex>
          <Button
            leftIcon={<FaFilter />}
            onClick={() => setShowFilters(!showFilters)}
            variant="outline"
            colorScheme="purple"
            size="sm"
          >
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
          <Spacer />
          <HStack>
            <Text fontSize="sm" color="gray.600">Sort by:</Text>
            <Select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              size="sm"
              width="120px"
            >
              <option value="name">Name</option>
              <option value="price">Price</option>
              <option value="discount">Discount</option>
            </Select>
            <IconButton
              aria-label="Sort order"
              icon={<FaSort />}
              size="sm"
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              colorScheme={sortOrder === 'asc' ? 'blue' : 'orange'}
            />
          </HStack>
        </Flex>

        {/* Filters Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden' }}
            >
              <VStack spacing={4} align="stretch" pt={4} borderTop="1px" borderColor={borderColor}>
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={4}>
                  {/* Category Filter */}
                  <Box>
                    <Text mb={2} fontWeight="semibold" fontSize="sm">Category</Text>
                    <Select
                      placeholder="All Categories"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      size="sm"
                    >
                      {categories.map(category => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </Select>
                  </Box>

                  {/* Price Range */}
                  <Box>
                    <Text mb={2} fontWeight="semibold" fontSize="sm">
                      Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                    </Text>
                    <RangeSlider
                      aria-label={['min', 'max']}
                      value={priceRange}
                      onChange={setPriceRange}
                      min={0}
                      max={10000}
                      step={100}
                      colorScheme="purple"
                    >
                      <RangeSliderTrack>
                        <RangeSliderFilledTrack />
                      </RangeSliderTrack>
                      <RangeSliderThumb index={0} />
                      <RangeSliderThumb index={1} />
                    </RangeSlider>
                  </Box>
                </Grid>

                <Button
                  leftIcon={<FaTimes />}
                  onClick={handleClearFilters}
                  variant="ghost"
                  colorScheme="red"
                  size="sm"
                  alignSelf="flex-start"
                >
                  Clear All Filters
                </Button>
              </VStack>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Text fontSize="sm" fontWeight="semibold" mb={2}>Active Filters:</Text>
            <HStack spacing={2} flexWrap="wrap">
              {activeFilters.map((filter, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Tag colorScheme="purple" size="sm">
                    <TagLabel>{filter.type}: {filter.value}</TagLabel>
                    <TagCloseButton onClick={() => removeFilter(index)} />
                  </Tag>
                </motion.div>
              ))}
            </HStack>
          </motion.div>
        )}
      </VStack>
    </MotionBox>
  );
};

export default AdvancedSearch;
