import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HiMenuAlt2 } from 'react-icons/hi';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="teal"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'20%'}
        onClick={onOpen}
        zIndex={'10'}
      >
        <HiMenuAlt2 size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          marginLeft={'4'}
          marginTop={'4'}
          marginBottom={'4'}
          borderRadius={'10px'}
        >
          <DrawerCloseButton h={'10'} w={'10'} marginTop={'1'} />
          <DrawerHeader fontWeight={'bold'}> Foodie Junction </DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button onClick={onClose} variant={'ghost'} colorScheme="teal">
                <Link to={'/'}> Home </Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme="teal">
                <Link to={'/videos'}> Recipies </Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme="teal">
                <Link to={'/videos?category=free'}> Free Videos </Link>
              </Button>
              <Button onClick={onClose} variant={'ghost'} colorScheme="teal">
                <Link to={'/upload'}> Upload Videos </Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={'6'}
              left={'0'}
              w={'full'}
              justifyContent={'space-around'}
            >
              <Button colorScheme={'teal'} w={'40%'}>
                <Link to={'/login'}>Log In</Link>
              </Button>
              <Button colorScheme={'teal'} variant={'outline'} w={'40%'}>
                <Link to={'/signup'}>Register</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
