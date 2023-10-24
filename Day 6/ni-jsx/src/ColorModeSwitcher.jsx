import React from 'react';
import { useColorMode, useColorModeValue, IconButton, color } from '@chakra-ui/react';
import {LightbulbOff ,Lightbulb  } from 'lucide-react';
import {FcIdea, FcNoIdea} from 'react-icons/fc';

const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(LightbulbOff, Lightbulb);
  const IconColor = useColorModeValue('whiteAlpha.800', 'yellow.300');

  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      pos={'fixed'}
      top={'4'}
      right={'4'}
      zIndex={'10'}
      bgColor={'blackAlpha.700'}
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      color={IconColor}
      {...props}
    />
  );
};

export default ColorModeSwitcher;