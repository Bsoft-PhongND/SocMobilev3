import React from 'react';
import {FlatList, HStack, ScrollView, Text, View} from 'native-base';
import ListItemModal from '../../model/tableListItem';
import {ViewStyle, VirtualizedList} from 'react-native';
import {theme} from '../../theme/theme';

const RenderItem = ({item, index}: any) => {
  return (
    <HStack style={{paddingVertical: 5}} alignItems="center">
      <Text
        style={{
          ...theme.fontSize.h4,
          color: theme.colors.text,
          width: '69%',
        }}>
        {item.title || '--'}
      </Text>
      <View bg={'amber.100'} w={'1%'} height={'100%'} />
      <Text
        style={{
          ...theme.fontSize.h4,
          color: theme.colors.text,
          width: '30%',
          textAlign: 'center',
        }}>
        {item.value || '--'}
      </Text>
    </HStack>
  );
};
function TableListItem(props: PropsTypes) {
  const {
    dataSource,
    labels = ['Title', 'Value'],
    scales = [70, 30],
    styles = [null, {textAlign: 'center'}],
  } = props;
  const data = dataSource || ListItemModal;
  const memorized = React.useMemo(() => data.slice(0, 5), [data]);
  return (
    <View style={{paddingHorizontal: 10}}>
      <HStack>
        {labels.map((item, index) => {
          return (
            <Text
              key={index}
              style={{
                ...theme.fontSize.h3,
                color: theme.colors.text,
                fontWeight: 'bold',
                width: `${scales[index]}%`,
                ...styles[index]
              }}>
              {item}
            </Text>
          );
        })}
      </HStack>
        {memorized.map((item, index) => (
          <RenderItem key={index} item={item} index={index} />
        ))}
      {ListItemModal.length > 5 && (
        <View
          mt={2}
          borderWidth={1}
          borderStyle={'dotted'}
          borderColor={theme.colors.text}
        />
      )}
    </View>
  );
}
interface PropsTypes {
  dataSource?: Array<any>;
  labels?: Array<string>;
  scales?: Array<number>;
  styles?: Array<ViewStyle>;
}
export default React.memo(TableListItem);
