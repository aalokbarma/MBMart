import { View, Text } from 'react-native'
import React from 'react'
import Styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Colors from '../../../../Constants/Colors';

const MainSection = () => {
  return (
    <View style = {Styles.mainContainer}>
        <View style = {Styles.mainSection}>
            <View style = {Styles.iconsContainer}>
                <FontAwesome name="cloud" size={200} color={Colors.maroon} style = {Styles.cloud1} />
                <FontAwesome5 name="cloud-sun" size={180} color={Colors.waterMelon} style = {Styles.cloud2} />
                <FontAwesome5 name="cloud-moon" size={180} color={Colors.waterMelon} style = {Styles.cloud3} />
                <FontAwesome5 name="door-open" size={100} color={Colors.scarlet} style = {Styles.gift1} />
                <MaterialCommunityIcons name="truck-delivery" size={180} color={Colors.maroon} style = {Styles.gift2} />
                {/* <FontAwesome name="gift" size={120} color={Colors.scarlet} style = {Styles.gift3} /> */}

            </View>
        </View>
        <View style = {Styles.textSection}>
            <View style = {Styles.textHeading}>
                <Text style = {Styles.headingText}>Delivery</Text>
            </View>
            <View style = {Styles.textContent}>
                <Text style = {Styles.contentText}>MB Mart delivers your order at your doorstep all over the country safely and securely. We are available 24 x 7 to take your order.</Text>
            </View>
        </View>
    </View>
  )
}

export default MainSection;