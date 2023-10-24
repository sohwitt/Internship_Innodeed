import { Box, Container, Heading, Img, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/food1.jpg';
import img2 from '../assets/food2.jpg';
import img3 from '../assets/food3.jpg';
import img4 from '../assets/food4.jpg';
import img5 from '../assets/food5.jpg';
import img6 from '../assets/Vector-Burger.png';

const headingOptions = {
  pos: 'absolute',
  left: '8',
  bottom: '16',
  bgColor: 'blackAlpha.600',
  color: 'white',
  p: '2',
  fontSize: '6xl',
  fontFamily: 'Ysabeau SC',
  borderRadius: '8px',
};

const Home = () => {
  return (
    <Box margin={'1'}>
      <MyCarousel />

      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        <Heading
          m={'auto'}
          paddingTop={'2'}
          width={'full'}
          borderBottom={'3px solid'}
          textAlign={'end'}
          fontFamily={'Ysabeau SC'}
        >
          Services
        </Heading>

        <Stack
          marginTop={'8'}
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column, row']}
        >
          <Img src={img6} h={['40', '400']} filter={'hue-rotate(40deg)'} />

          <Text
            fontFamily={'Poppins'}
            letterSpacing={'wider'}
            lineHeight={'8'}
            fontWeight={'400'}
            p={['4', '16']}
            textAlign={'end'}
          >
            Recipe Search and Browse: The website offers a powerful search
            engine and intuitive browsing features, allowing users to find
            recipes based on specific ingredients, cooking methods, meal types,
            or dietary restrictions. This makes it easy for users to discover
            new recipes or find ideas for using ingredients they already have.
            Recipe Collections and Categories: Recipe websites often organize
            their vast recipe database into collections and categories to make
            it easier for users to navigate and explore. These collections may
            include popular recipes, seasonal dishes, quick and easy meals,
            healthy options, desserts, and much more. Recipe Details and
            Instructions: Each recipe on the website provides comprehensive
            details and instructions, including ingredient lists, step-by-step
            cooking instructions, cooking times, and serving suggestions. Some
            websites may also include nutritional information, allergen details,
            and user reviews for added convenience and feedback.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={3000}
    showThumbs={false}
    showStatus={false}
    useKeyboardArrows={true}
  >
    <Box w={'full'} h={'99vh'} >
      <Img src={img1} />
      <Heading {...headingOptions}>Heavenly Burgers</Heading>
    </Box>

    <Box w={'full'} h={'99vh'}>
      <Img src={img2} />
      <Heading {...headingOptions}>Tandoori Kababs</Heading>
    </Box>

    <Box w={'full'} h={'99vh'}>
      <Img src={img3} />
      <Heading {...headingOptions}>Shrimp Fried Noodles</Heading>
    </Box>

    <Box w={'full'} h={'99vh'}>
      <Img src={img4} />
      <Heading {...headingOptions}>Perfectly Grilled Steak</Heading>
    </Box>

    <Box w={'full'} h={'99vh'}>
      <Img src={img5} />
      <Heading {...headingOptions}>Freshly Cut Salad</Heading>
    </Box>
  </Carousel>
);

export default Home;
