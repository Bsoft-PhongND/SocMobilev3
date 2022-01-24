import {Box, HStack, Icon, IconButton, useDisclose} from 'native-base';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StaggerComponent from '../../components/stagger';
function FabFunction() {
  const {isOpen, onToggle} = useDisclose();

  return (
    <Box
      alignItems="center"
      style={{position: 'absolute', bottom: 50, right: 50}}>
      <StaggerComponent isOpen={isOpen}>
        <IconButton
          mb="4"
          variant="solid"
          bg="indigo.500"
          colorScheme="indigo"
          borderRadius="full"
          icon={
            <Icon
              as={MaterialIcons}
              size="6"
              name="location-pin"
              _dark={{
                color: 'warmGray.50',
              }}
              color="warmGray.50"
            />
          }
        />
        <IconButton
          mb="4"
          variant="solid"
          bg="yellow.400"
          colorScheme="yellow"
          borderRadius="full"
          icon={
            <Icon
              as={MaterialCommunityIcons}
              _dark={{
                color: 'warmGray.50',
              }}
              size="6"
              name="microphone"
              color="warmGray.50"
            />
          }
        />
        <IconButton
          mb="4"
          variant="solid"
          bg="teal.400"
          colorScheme="teal"
          borderRadius="full"
          icon={
            <Icon
              as={MaterialCommunityIcons}
              _dark={{
                color: 'warmGray.50',
              }}
              size="6"
              name="video"
              color="warmGray.50"
            />
          }
        />
        <IconButton
          mb="4"
          variant="solid"
          bg="red.500"
          colorScheme="red"
          borderRadius="full"
          icon={
            <Icon
              as={MaterialIcons}
              size="6"
              name="photo-library"
              _dark={{
                color: 'warmGray.50',
              }}
              color="warmGray.50"
            />
          }
        />
      </StaggerComponent>

      <HStack alignItems="center">
        <IconButton
          variant="solid"
          borderRadius="full"
          size="lg"
          onPress={onToggle}
          bg="cyan.400"
          icon={
            <Icon
              as={Feather}
              size="6"
              name="plus"
              color="warmGray.50"
              _dark={{
                color: 'warmGray.50',
              }}
            />
          }
        />
      </HStack>
    </Box>
  );
}
export default React.memo(FabFunction);
