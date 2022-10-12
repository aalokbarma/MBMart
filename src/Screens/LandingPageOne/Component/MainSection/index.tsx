import { View, Text } from 'react-native'
import React from 'react'
import Styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import Colors from '../../../../Constants/Colors';

const MainSection = () => {
  return (
    <View style = {Styles.mainContainer}>
        <View style = {Styles.mainSection}>
            <View style = {Styles.iconsContainer}>
                <FontAwesome name="cloud" size={200} color={Colors.waterMelon} style = {Styles.cloud1} />
                <AntDesign name="cloud" size={200} color={Colors.waterMelon} style = {Styles.cloud2} />
                <Entypo name="cloud" size={200} color={Colors.waterMelon} style = {Styles.cloud3} />
                <MaterialIcons name="card-giftcard" size={125} color={Colors.maroon} style = {Styles.gift1} />
                <FontAwesome5 name="gifts" size={150} color={Colors.maroon} style = {Styles.gift2} />
                <FontAwesome name="gift" size={120} color={Colors.scarlet} style = {Styles.gift3} />
                {/* <Entypo name="shopping-cart" size={180} color={Colors.wine} style = {Styles.cart} /> */}

            </View>
        </View>
        <View style = {Styles.textSection}>
            <View style = {Styles.textHeading}>
                <Text style = {Styles.headingText}>Affordable Price</Text>
            </View>
            <View style = {Styles.textContent}>
                <Text style = {Styles.contentText}>With MB Mart you can get thousands of items in your fingertips with remarkable prices. So, hurry up !</Text>
            </View>
        </View>
    </View>
  )
}

export default MainSection;