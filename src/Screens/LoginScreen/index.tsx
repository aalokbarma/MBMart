import { View, Text } from 'react-native';
import React from 'react';
import Styles from './styles';
import NormalHeader from '../../Common/NormalHeader';
import MainContainer from './Component/MainContainer';

const LoginScreen = ({navigation} : any) => {
  return (
    <View style = {Styles.loginScreen}>
      <NormalHeader />
      <MainContainer navigation = {navigation} />
    </View>
  )
}

export default LoginScreen;