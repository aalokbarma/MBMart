import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Styles from './styles';
import Colors from '../../../../Constants/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MainContainer = ({navigation}: any) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false)

    const togglePasswordVisible = () => {
        passwordVisible ? setPasswordVisible(false) : setPasswordVisible(true)
    }

    const onLoginPress = () => {
        navigation.navigate("Login")
    }

  return (
    <View style = {Styles.mainContainer}>
      <ScrollView style = {Styles.loginScrollView}>
        <View style = {Styles.loginHeader}>
            <Text style = {Styles.headerText}>Forget Password</Text>
        </View>
        <View style = {Styles.mainForm}>
            <View style = {Styles.inputRow}>
                <TextInput 
                    style = {[Styles.inputField, Styles.emailInput]}
                    value = {email}
                    keyboardType= 'email-address'
                    onChangeText = {setEmail}
                    placeholder = "E-mail or Username"
                    placeholderTextColor={Colors.tomato}
                />
            </View>
            {/* <View style = {[Styles.inputRow,{marginBottom: 10}]}>
                <TextInput 
                    style = {[Styles.inputField, Styles.passwordInput]}
                    value = {password}
                    // keyboardType= 'visible-password'
                    onChangeText = {setPassword}
                    placeholder = "Password"
                    placeholderTextColor={Colors.tomato}
                    secureTextEntry = {!passwordVisible}
                />
                <TouchableOpacity onPress={togglePasswordVisible}>
                    {
                        passwordVisible ? <FontAwesome name="eye-slash" size={30} color= {Colors.lightRed} /> :
                        <FontAwesome name="eye" size={30} color= {Colors.tomato} />
                    }
                </TouchableOpacity>
                
            </View> */}
            {/* <View style=  {Styles.forgetContainer}>
                <TouchableOpacity style = {Styles.forgetTouchable}>
                    <Text style = {Styles.forgetText}>Forget password?</Text>
                </TouchableOpacity>
            </View> */}
            <View style = {Styles.loginButtonContainer}>
                <TouchableOpacity style = {[Styles.loginButton, {backgroundColor: Colors.maroon}]}>
                    <Text style = {Styles.loginButtonText}>Send Email</Text>
                </TouchableOpacity>
            </View>
            <View style = {Styles.emptyView} />
            <View style = {Styles.signupLinkContainer}>
                <Text style = {Styles.alreadyText}>Back to</Text>
                <TouchableOpacity style = {Styles.signupLink} onPress = {onLoginPress}>
                    <Text style = {Styles.signupLinkText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default MainContainer;