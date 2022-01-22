import React from 'react';
import {Button, Flex, Icon, Stack, Text, View} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {theme} from '../../theme/theme';
import wordApp from '../../utils/word';
export function ToolBar({loading,onRefresh}:{loading:boolean,onRefresh:any}) {
  return (
    <Stack flexDirection="row" space="md" style={{marginTop:2}}>
      <Flex flexDirection="row" style={{justifyContent:'space-between',alignItems:'center',flex:1}}>
        <View>
          <AntDesign name="filter" size={22} color="white" />
        </View>
        <Flex flexDirection="row">
          <AntDesign name="calendar" size={22} color="white" />
          <Text
            style={{
              ...theme.fontSize.h4,
              color: theme.colors.text,
              marginLeft:10,
            }}>{`${new Date().toLocaleDateString()} - ${new Date().toLocaleDateString()}`}</Text>
        </Flex>
        <View>
          <Button
            variant="subtle"
            isLoading={loading}
            style={{padding:5}}
            onPress={onRefresh}
            leftIcon={<Icon as={Ionicons} name="refresh" size="xs" />}>
            {wordApp.refresh}
          </Button>
        </View>
      </Flex>
    </Stack>
  );
}
