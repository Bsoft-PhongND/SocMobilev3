import {Checkbox, Flex, Pressable, Text} from 'native-base';
import React from 'react';
import {theme} from '../../theme/theme';
interface PropsTypes {
  accessibilityLabel?: string;
  defaultIsChecked?: boolean;
  label?: string;
  onChangeChecked?: any;
}
export default function CheckBoxComponent(props: PropsTypes) {
  return <MyCheckBox {...props} />;
}
const MyCheckBox = React.memo((props: PropsTypes) => {
  return (
    
      <Pressable onPress={props.onChangeChecked}>
        <Flex flexDirection={'row'}>
        <Checkbox
          onChange={props.onChangeChecked}
          isChecked={props.defaultIsChecked}
          value="test"
          accessibilityLabel="This is a dummy checkbox"
        />
        <Text
          style={{
            ...theme.fontSize.h4,
            paddingLeft: 20,
            color: theme.colors.text,
          }}>
          {props.label}
        </Text>
        </Flex>
      </Pressable>
  
  );
});
