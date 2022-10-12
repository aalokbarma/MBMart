import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Styles from './styles';
import Colors from '../../../../Constants/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const MainContainer = ({navigation}: any) => {

    const [fName, setFName] = useState("");
    const [lName, setLName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [mob, setMob] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false)
    const [cPasswordVisible, setCPasswordVisible] = useState(false)

    const togglePasswordVisible = () => {
        passwordVisible ? setPasswordVisible(false) : setPasswordVisible(true)
    }

    const toggleCPasswordVisible = () => {
        cPasswordVisible ? setCPasswordVisible(false) : setCPasswordVisible(true)
    }

    const onLoginPress = () => {
        navigation.navigate("Login")
    }

  return (
    <View style = {Styles.mainContainer}>
      <ScrollView style = {Styles.loginScrollView}>
        <View style = {Styles.loginHeader}>
            <Text style = {Styles.headerText}>Sign Up</Text>
        </View>
        <View style = {Styles.mainForm}>
            <View style = {Styles.halfInputRow}>
                <TextInput 
                    style = {[Styles.halfInputField, Styles.emailInput]}
                    value = {fName}
                    keyboardType= 'default'
                    onChangeText = {setFName}
                    placeholder = "First Name"
                    placeholderTextColor={Colors.tomato}
                />
                <TextInput 
                    style = {[Styles.halfInputField, Styles.emailInput]}
                    value = {lName}
                    keyboardType= 'default'
                    onChangeText = {setLName}
                    placeholder = "Last Name"
                    placeholderTextColor={Colors.tomato}
                />
            </View>
            <View style = {Styles.inputRow}>
                <TextInput 
                    style = {[Styles.inputField, Styles.emailInput]}
                    value = {username}
                    keyboardType= 'default'
                    onChangeText = {setUsername}
                    placeholder = "Username"
                    placeholderTextColor={Colors.tomato}
                />
            </View>
            <View style = {Styles.inputRow}>
                <TextInput 
                    style = {[Styles.inputField, Styles.emailInput]}
                    value = {email}
                    keyboardType= 'email-address'
                    onChangeText = {setEmail}
                    placeholder = "E-mail"
                    placeholderTextColor={Colors.tomato}
                />
            </View>
            <View style = {Styles.inputRow}>
                <TextInput 
                    style = {[Styles.inputField, Styles.emailInput]}
                    value = {mob}
                    keyboardType= 'phone-pad'
                    onChangeText = {setMob}
                    placeholder = "Mobile Number"
                    placeholderTextColor={Colors.tomato}
                />
            </View>
            <View style = {Styles.inputRow}>
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
                
            </View>
            <View style = {Styles.inputRow}>
                <TextInput 
                    style = {[Styles.inputField, Styles.passwordInput]}
                    value = {cPassword}
                    // keyboardType= 'visible-password'
                    onChangeText = {setCPassword}
                    placeholder = "Confirm Password"
                    placeholderTextColor={Colors.tomato}
                    secureTextEntry = {!cPasswordVisible}
                />
                <TouchableOpacity onPress={toggleCPasswordVisible}>
                    {
                        cPasswordVisible ? <FontAwesome name="eye-slash" size={30} color= {Colors.lightRed} /> :
                        <FontAwesome name="eye" size={30} color= {Colors.tomato} />
                    }
                </TouchableOpacity>
                
            </View>
            <View style = {Styles.loginButtonContainer}>
                <TouchableOpacity style = {[Styles.loginButton, {backgroundColor: Colors.maroon}]}>
                    <Text style = {Styles.loginButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            <View style = {Styles.emptyView} />
            <View style = {Styles.loginLinkContainer}>
                <Text style = {Styles.dontText}>Don't have an account?</Text>
                <TouchableOpacity style = {Styles.loginLink} onPress = {onLoginPress}>
                    <Text style = {Styles.loginLinkText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default MainContainer;