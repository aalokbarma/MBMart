import { View, Text, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import Styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Colors from '../../../../Constants/Colors';

const BottomSection = ({navigation}: any) => {

    const onNextPress = () => {
        navigation.navigate("LandingPageTwo")
    }

  return (
    <View style = {Styles.bottomSheet}>
        <View style = {Styles.leftSection}>
            <TouchableOpacity disabled style = {Styles.backButtonTouchable}>
                <AntDesign name="arrowleft" size={35} color= {Colors.vermillion} />
                <Text style = {Styles.backText}>Back</Text>
            </TouchableOpacity>
        </View>
        <View style = {Styles.midSection}>
            <View style = {[Styles.emptyView, {backgroundColor: Colors.maroon}]} />
            <View style = {[Styles.emptyView, {backgroundColor: Colors.lightRed}]} />
            <View style = {[Styles.emptyView, {backgroundColor: Colors.lightRed}]} />
        </View>
        <View style = {Styles.rightSection}>
            <TouchableOpacity style = {Styles.backButtonTouchable} onPress = {onNextPress}>
                <Text style = {Styles.nextText}>Next</Text>
                <AntDesign name="arrowright" size={35} color= {Colors.fireBrick} />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default BottomSection;