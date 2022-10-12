import { View, Text } from 'react-native';
import React from 'react';
import Styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

const NormalHeader = ({navigation}: any) => {

  return (
    <View style =  {Styles.landingPageHeader}>
      <View style = {Styles.headerTextContainer}>
        <Text style = {Styles.headerText}>MB Mart</Text>
      </View>
    </View>
  )
}

export default NormalHeader;