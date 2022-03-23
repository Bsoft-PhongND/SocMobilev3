import { HStack, Icon, ScrollView, Text, VStack } from 'native-base';
import React from 'react';
import { AntDesign } from "../../../assets/icons";
import { theme } from '../../../theme/theme';

// const inforData = [
//   {
//     icon: <MaterialCommunityIcons name="id-card" />,
//     title: 'Organization',
//     content: 'Demo inc',
//   },
//   {
//     icon: <MaterialCommunityIcons name="hammer-screwdriver" />,
//     title: 'Status',
//     content: 'Pending Client',
//   },
//   {
//     icon: <MaterialCommunityIcons name="calendar-clock" />,
//     title: 'Date Created',
//     content: new Date().toLocaleDateString(),
//   },
//   {
//     icon: <Ionicons name="ios-person-circle-outline" />,
//     title: 'Actor',
//     content: 'Desktop-ggmv2',
//   },
//   {
//     icon: <MaterialCommunityIcons name="bug" />,
//     title: 'Action',
//     content: 'Malware',
//   },
// ];
function Container(props: any) {
  return <TabDetailWarning {...props}/>;
}
function TabDetailWarning(props: any) {
  const {detail} = props;
  return (
    <ScrollView>
       {detail && typeof detail === 'object' && Object.keys(detail).map((key,index) =>{
         return (
          <HStack alignItems="center" mt={3} key={index}>
          <Icon
            as={<AntDesign name="tags" />}
            size={7}
            ml="2"
            color="muted.600"
          />
          <VStack paddingLeft={5}>
            <Text
              style={{
                ...theme.fontSize.h3,
                color: theme.colors.medium,
                fontWeight: 'bold',
              }}>
              {key || '---'}
            </Text>
            <Text style={{...theme.fontSize.h4, color: theme.colors.medium}} pr={2}>
            {detail[`${key}`]?JSON.stringify(detail[`${key}`]):'---'}
            </Text>
          </VStack>
        </HStack>
         )
       })}
    </ScrollView>
  );
}
export default Container;
