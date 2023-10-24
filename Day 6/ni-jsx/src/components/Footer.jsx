import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box
      bgColor={'blackAlpha.900'}
      p={'8'}
      color={'white'}
      alignContent={'center'}
    >
      <Stack direction={['column', 'row']} >
      <VStack>
      <Heading size={'md'} fontFamily={'Poppins'}>
            Enter your Email to recieve our Newsletter.
          </Heading>
        <HStack>
        
          <Input
            placeholder="foodie@feast.com"
            fontFamily={'Poppins'}
            border={'none'}
            focusBorderColor="none"
            bgColor={'whiteAlpha.200'}
          />
          <Button
            p={'0'}
            colorScheme={'teal'}
            variant={'ghost'}
            borderRadius={' 5px 20px 20px 5px'}
          >
            <AiOutlineSend size={'20'} />
          </Button>
        </HStack>
      </VStack>
      <VStack>
        <Heading>Outlets</Heading>
      
      </VStack>
          <VStack>

          </VStack>
        
      </Stack>
    </Box>
  );
};

export default Footer;
