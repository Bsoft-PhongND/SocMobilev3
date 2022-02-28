import {useNavigation} from '@react-navigation/native';
import {Box, HStack, Icon, Pressable, Text, View, VStack} from 'native-base';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {SlideInLeft} from 'react-native-reanimated';
import {AntDesign, MaterialCommunityIcons} from '../../assets/icons';
import {tableListModel, tableListStatus} from '../../model/tableListView';
import {theme} from '../../theme/theme';
import wordApp from '../../utils/word';
const RenderItemText = ({label, content, content2}: any) => {
  return (
    <View style={styles.row}>
      <Text
        color={theme.colors.text}
        numberOfLines={2}
        _dark={{
          color: 'warmGray.50',
        }}
        bold>
        {label || '--'} :
      </Text>
      <HStack>
        <Text
          color={theme.colors.text}
          numberOfLines={2}
          _dark={{
            color: 'warmGray.50',
          }}
          bold>
          {content || '--'}
        </Text>
        {content2 && (
          <HStack>
            <Icon
              as={<AntDesign name="arrowright" />}
              size={5}
              ml="2"
              color="muted.100"
            />
            <Text
              color={theme.colors.text}
              numberOfLines={2}
              ml={2}
              _dark={{
                color: 'warmGray.50',
              }}
              bold>
              {content2 || '--'}
            </Text>
          </HStack>
        )}
      </HStack>
    </View>
  );
};
function TableListStatus() {
  const [listData, setListData] = useState(tableListStatus);
  const RenderItem = ({item, index}: any) => {
    return (
      <Animated.View entering={SlideInLeft.delay(index * 8)} key={index}>
        <Box
          borderBottomWidth={1}
          borderColor={theme.colors.border}
          pl="4"
          pr="5"
          py="2">
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
              <HStack justifyContent="flex-start" alignItems="center">
                <Icon
                  as={<MaterialCommunityIcons name="access-point-network" />}
                  size={5}
                  mr="2"
                  color="lime.300"
                />
                <Box style={styles.ipAdress}>
                  <Text color={theme.colors.text} numberOfLines={2} bold>
                    {item?.ip || '--'}
                  </Text>
                </Box>
              </HStack>
              <RenderItemText label="Name" content={item.name} />
              <RenderItemText label="Status" content={item.status} />
            </VStack>
          </HStack>
        </Box>
      </Animated.View>
    );
  };
  return (
    <View flex={1}>
      <Text style={{color: theme.colors.text, ...theme.fontSize.h3}}>
        {wordApp.list}
      </Text>
      {listData.map((item, index) => {
        return <RenderItem item={item} index={index} key={index} />;
      })}
    </View>
  );
}
export default React.memo(TableListStatus);
const styles = StyleSheet.create({
  ipAdress: {
    backgroundColor: theme.colors.lightBlue800,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
  },
});
