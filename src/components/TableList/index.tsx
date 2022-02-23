import {useNavigation} from '@react-navigation/native';
import {
  Avatar,
  Box,
  Center,
  FlatList,
  Heading,
  HStack,
  Icon,
  Pressable,
  ScrollView,
  Spacer,
  Text,
  View,
  VStack,
} from 'native-base';
import React, {useState} from 'react';
import Animated, {SlideInLeft} from 'react-native-reanimated';
import {SwipeListView} from 'react-native-swipe-list-view';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NameScreen} from '../../config';
import tableListModel from '../../model/tableListView';
import {theme} from '../../theme/theme';
import wordApp from '../../utils/word';
function TableListView() {
  const [listData, setListData] = useState(tableListModel);
  const navigation = useNavigation();
  const handleNavigate = (item: any) => {
    navigation.navigate(NameScreen.DashboardUniversityScreen, {item});
  };
  const renderItem = ({item, index}: any) => {
    return (
      <Animated.View entering={SlideInLeft.delay(index * 8)}>
        <Box borderBottomWidth={1} borderColor={theme.colors.border}>
          <Pressable onPress={() => handleNavigate(item)} _dark={{}}>
            <Box pl="4" pr="5" py="2">
              <HStack alignItems="center" space={3}>
                <Box
                  borderRadius={50}
                  backgroundColor={item.color || theme.colors.hight}
                  w={50}
                  h={50}
                  justifyContent="center"
                  alignItems="center">
                  <Text
                    style={{
                      color: theme.colors.text,
                      fontWeight: 'bold',

                      ...theme.fontSize.h3,
                    }}>
                    {item.name ? item.name[0].toUpperCase() : '--'}
                  </Text>
                </Box>
                <VStack flex={1}>
                  <Text
                    color={theme.colors.text}
                    numberOfLines={2}
                    _dark={{
                      color: 'warmGray.50',
                    }}
                    bold>
                    {item.name || '--'}
                  </Text>
                  <Text
                    color={theme.colors.text}
                    _dark={{
                      color: 'warmGray.200',
                    }}>
                    {item.cityName}
                  </Text>
                </VStack>
                <Text
                  fontSize="xs"
                  color={theme.colors.text}
                  _dark={{
                    color: 'warmGray.50',
                  }}
                  alignSelf="flex-start">
                  {item.timeStamp
                    ? new Date(item.timeStamp).toLocaleDateString()
                    : '--'}
                </Text>
              </HStack>
            </Box>
          </Pressable>
        </Box>
      </Animated.View>
    );
  };
  //   const closeRow = (rowMap, rowKey) => {
  //     if (rowMap[rowKey]) {
  //       rowMap[rowKey].closeRow();
  //     }
  //   };

  //   const deleteRow = (rowMap, rowKey) => {
  //     const newData = [...listData];
  //     const prevIndex = listData.findIndex(item => item.id === rowKey);
  //     newData.splice(prevIndex, 1);
  //     setListData(newData);
  //   };

  //   const renderHiddenItem = (data, rowMap) => {
  //     return (
  //       <HStack flex="1" pl="2">
  //         <Pressable
  //           w="70"
  //           ml="auto"
  //           bg="coolGray.200"
  //           justifyContent="center"
  //           onPress={() => closeRow(rowMap, data.item.id)}
  //           _pressed={{
  //             opacity: 0.5,
  //           }}>
  //           <VStack alignItems="center" space={2}>
  //             <Icon
  //               as={<Entypo name="dots-three-horizontal" />}
  //               size="xs"
  //               color="coolGray.800"
  //             />
  //             <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
  //               More
  //             </Text>
  //           </VStack>
  //         </Pressable>
  //         <Pressable
  //           w="70"
  //           bg="red.500"
  //           justifyContent="center"
  //           onPress={() => deleteRow(rowMap, data.item.id)}
  //           _pressed={{
  //             opacity: 0.5,
  //           }}>
  //           <VStack alignItems="center" space={2}>
  //             <Icon
  //               as={<MaterialIcons name="delete" />}
  //               color="white"
  //               size="xs"
  //             />
  //             <Text color="white" fontSize="xs" fontWeight="medium">
  //               Delete
  //             </Text>
  //           </VStack>
  //         </Pressable>
  //       </HStack>
  //     );
  //   };
  return (
    <View flex={1}>
      <Text style={{color: theme.colors.text, ...theme.fontSize.h3}}>
        {wordApp.list}
      </Text>
      {/* <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-130}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
      />*/}
      <FlatList data={listData} renderItem={renderItem} />
    </View>
  );
}
export default TableListView;
