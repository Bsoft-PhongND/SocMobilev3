import React from "react";
import { View, Text, StatusBar } from "native-base";
import styles from "../../screens/Login/style";
import { theme } from "../../theme/theme";
import { SafeAreaView } from "react-native";

function ViewBackGround({children}:{children:React.ReactNode}){
   return(
    <View style={{flex: 1,backgroundColor:theme.colors.background}}>
       <StatusBar barStyle={"light-content"}/>
       <SafeAreaView style={{flex:1}}>{children}</SafeAreaView>
       </View>
   )
}
export default ViewBackGround;