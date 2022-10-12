import { View, Text } from 'react-native'
import React from 'react'
import Styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Colors from '../../../../Constants/Colors';

const MainSection = () => {
  return (
    <View style = {Styles.mainContainer}>
        <View style = {Styles.mainSection}>
            <View style = {Styles.iconsContainer}>
                <FontAwesome name="cloud" size={200} color={Colors.waterMelon} style = {Styles.cloud1} />
                <AntDesign name="cloud" size={200} color={Colors.waterMelon} style = {Styles.cloud2} />
                <Entypo name="cloud" size={200} color={Colors.scarlet} style = {Styles.cloud3} />
                <EvilIcons name="credit-card" size={150} color={Colors.maroon} style = {Styles.gift1} />
                <AntDesign name="qrcode" size={150} color={Colors.scarlet} style = {Styles.gift2} />
                <MaterialIcons name="delivery-dining" size={200} color={Colors.burgundy} style = {Styles.gift3} />
                {/* <Entypo name="shopping-cart" size={180} color={Colors.wine} style = {Styles.cart} /> */}

            </View>
        </View>
        <View style = {Styles.textSection}>
            <View style = {Styles.textHeading}>
                <Text style = {Styles.headingText}>Payment</Text>
            </View>
            <View style = {Styles.textContent}>
                <Text style = {Styles.contentText}>MB Mart gives you a various of options to pay for your order. We accept Card payment, UPI payments and Cash on Delivery too.</Text>
            </View>
        </View>
    </View>
  )
}

export default MainSection;