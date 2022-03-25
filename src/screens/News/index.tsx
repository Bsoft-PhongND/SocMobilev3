import React from 'react';
import Commingsoon from '../../components/commingsoon';
import HeaderMenu from '../../components/headermenu';
import ViewBackGround from '../../components/viewbackground';



export default function NewsScreen({ }) {
  return (
    <ViewBackGround>
      <HeaderMenu title="Tin tức" />
      <Commingsoon />

    </ViewBackGround>
  );
}
