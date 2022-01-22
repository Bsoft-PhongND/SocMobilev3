import {Heading, Text, View} from 'native-base';
import React from 'react';
import HeaderBack from '../../../components/headerback';
import {ToolBar} from '../../../components/tools/ToolBar';
import ViewBackGround from '../../../components/viewbackground';
import {theme} from '../../../theme/theme';
import wordApp from '../../../utils/word';

export default function StatisticScreen() {
  return (
    <ViewBackGround>
      <View style={{flex: 1, paddingHorizontal: 10}}>
        <ToolBar />
        <View>
          <Heading size="xs" style={{color: theme.colors.text}}>
            {wordApp.warningLevel}
          </Heading>
        </View>
        <View>
          <Heading size="xs" style={{color: theme.colors.text}}>
            {wordApp.correctationLevel}
          </Heading>
        </View>                    
        <View>
          <Heading size="xs" style={{color: theme.colors.text}}>
            {wordApp.warningStatus}
          </Heading>
        </View>
      </View>
    </ViewBackGround>
  );
}
