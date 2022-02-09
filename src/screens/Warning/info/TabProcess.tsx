import {Button, HStack, Icon, Input, Text} from 'native-base';
import React, {useEffect} from 'react';
import {Keyboard, View} from 'react-native';
import Animated, {Easing, EasingNode} from 'react-native-reanimated';
import Timeline from 'react-native-timeline-flatlist';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useKeyboard} from '../../../hooks/Keyboard';
import {theme} from '../../../theme/theme';
const data = [
  {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
  {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
  {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
  {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
  {time: '16:30', title: 'Event 5', description: 'Event 5 Description'},
];
function Container() {
  return <TabProcessWarning />;
}
function TabProcessWarning() {
  const height = useKeyboard();
  const marginTop = new Animated.Value(0);
  const toogleViewKeyboard = () => {
    console.log('toogle');
    Animated.timing(marginTop, {
      toValue: height,
      duration: 200,
      easing: EasingNode.ease,
    }).start();
  };
  const handleCancel = () => {
    Keyboard.dismiss();
  };
  useEffect(() => {
    toogleViewKeyboard();
  }, [useKeyboard()]);
  return (
    <Animated.View style={{flex: 1, marginBottom: marginTop}}>
      <Timeline
        data={data}
        style={{marginTop: 20, flex: 1}}
        circleSize={20}
        lineColor="rgb(45,156,219)"
        timeContainerStyle={{minWidth: 52, marginTop: -5}}
        timeStyle={{
          textAlign: 'center',
          backgroundColor: '#ff9797',
          color: 'white',
          padding: 5,
          borderRadius: 13,
        }}
        descriptionStyle={{color: 'gray'}}
        options={{
          style: {paddingTop: 5},
        }}
        innerCircle={'dot'}
        //   onEventPress={this.onEventPress}
        separator={false}
        detailContainerStyle={{
          marginBottom: 20,
          paddingLeft: 5,
          paddingRight: 5,
          backgroundColor: '#BBDAFF',
          borderRadius: 10,
        }}
        isUsingFlatlist={true}
        listViewContainerStyle={{paddingHorizontal:10}}
      />
      <View
        style={{
          marginTop: 10,
          height: '40%',
          maxHeight: 250,
          minHeight: 200,
          padding: 10
        }}>
        <HStack p={1}>
          <Icon
            as={<MaterialCommunityIcons name="comment-text-multiple" />}
            size={6}
            ml="2"
            color="primary.600"
          />
          <Text
            style={{...theme.fontSize.h4, marginLeft: 5}}
            color="primary.600">
            Comment
          </Text>
        </HStack>
        <Input
          multiline
          numberOfLines={5}
          height={100}
          style={{...theme.fontSize.h3}}
        />
        <HStack justifyContent={'flex-end'}>
          <Button variant={'unstyled'} onPress={handleCancel}>
            <Text color="muted.600">Cancel</Text>
          </Button>
          <Button variant={'unstyled'} onPress={handleCancel}>
            <Text color="info.900" fontWeight={'bold'}>
              Submit
            </Text>
          </Button>
        </HStack>
      </View>
    </Animated.View>
  );
}
export default Container;
