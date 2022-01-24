import React from 'react';
import {
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  Stagger,
  useDisclose,
  View,
} from 'native-base';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ViewBackGround from '../../components/viewbackground';
import styles from './style';
import HeaderBack from '../../components/headerback';
import StaggerComponent from '../../components/stagger';

function SecurityNetWorkScreen() {
  return <SecurityNetWork />;
}
function SecurityNetWork() {
  const {isOpen, onToggle} = useDisclose();
  return (
    <ViewBackGround>
      <HeaderBack />
      <View style={styles.container}>
        <Box alignItems="center" style={{ position: 'absolute',bottom: 50, right: 50}}>
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
      </View>
    </ViewBackGround>
  );
}
export default SecurityNetWorkScreen;
