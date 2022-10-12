import { View, Text } from 'react-native';
import React from 'react';
import Styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const LandingPageHeader = ({navigation}: any) => {
  return (
    <View style =  {Styles.landingPageHeader}>
      <View style = {Styles.headerTextContainer}>
        <Text style = {Styles.headerText}>MB Mart</Text>
      </View>
      <TouchableOpacity style = {Styles.skipBtnTouchable}>
        <Text style = {Styles.skipBtnText}>Skip</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LandingPageHeader;