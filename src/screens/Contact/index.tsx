import React from 'react'
import { View, Text } from 'react-native'
import Commingsoon from '../../components/commingsoon'
import HeaderMenu from '../../components/headermenu'
import ViewBackGround from '../../components/viewbackground'

const ContactScreen = () => {
  return (
    <ViewBackGround>
      <HeaderMenu/>
      <Commingsoon/>
  </ViewBackGround>
  )
}

export default ContactScreen