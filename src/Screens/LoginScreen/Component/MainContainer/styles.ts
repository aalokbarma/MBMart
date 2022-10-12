import { StyleSheet } from "react-native";
import Colors from "../../../../Constants/Colors";

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: Colors.maroon
    },
    loginScrollView: {
        backgroundColor: Colors.cream,
        borderTopLeftRadius: 70,
        borderTopRightRadius: 70,
        flex: 1,
        width: '100%',
        marginTop: '10%',
        paddingHorizontal: 15,
        paddingVertical: 25,
    },
    loginHeader: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        width: '100%',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: '700',
        color: Colors.maroon,
        letterSpacing: 2,
        textTransform: 'uppercase',
        textDecorationLine: 'underline',
        marginVertical: 25,
    },
    mainForm: {
        paddingBottom: 25,
        paddingHorizontal: 25,
        paddingTop: 25,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        marginVertical: 20,
        borderBottomColor: Colors.maroon,
        borderBottomWidth: 2,
        alignItems: 'center',
    },
    inputField: {
        fontSize : 20,
        color: Colors.maroon,
        letterSpacing: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        textAlign: 'left',
        flex: 1,
    },
    emailInput: {

    },
    passwordInput: {

    },
    loginButtonContainer: {
        width : '100%',
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginButton: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 10,
    },
    loginButtonText: {
        color: Colors.cream,
        fontSize: 20,
        fontWeight: '600',
        letterSpacing: 1,
    },
    emptyView: {
        width: '100%',
        height: 1,
        backgroundColor: Colors.maroon,
        marginTop: 25,
        marginBottom: 10,
    },
    signupLinkContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    alreadyText: {
        fontSize: 18,
        color: Colors.wine,
    },
    signupLinkText: {
        fontSize: 20,
        fontWeight: '600',
        color: Colors.maroon
    },
    signupLink: {
        marginLeft: 5
    },
});

export default Styles;