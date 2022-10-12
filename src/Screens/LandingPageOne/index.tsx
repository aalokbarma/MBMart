import { View, Text } from 'react-native';
import React from 'react';
import Styles from './styles';
import LandingPageHeader from '../../Common/LandingPageHeader';
import MainSection from './Component/MainSection';
import BottomSection from './Component/BottomSection';

const LandingPageOne = ({navigation}: any) => {
  return (
    <View style = {Styles.landingPageOne}>
      <LandingPageHeader navigation = {navigation} />
      <MainSection />
      <BottomSection navigation = {navigation} />
    </View>
  )
}

export default LandingPageOne;