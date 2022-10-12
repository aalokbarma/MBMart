import { StyleSheet } from "react-native";
import Colors from "../../../../Constants/Colors";

const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: Colors.cream,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainSection: {
        width: '100%',
        height: '60%',
    },
    iconsContainer: {
        display :'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    textSection: {
        width: '100%',
        height: 'auto',
        padding: 15,
    },
    textHeading: {
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: Colors.maroon,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    textContent: {
        width: '100%',
    },
    contentText: {
        width: '100%',
        textAlign: 'justify',
        fontSize: 16,
        fontWeight: '600',
        color: Colors.usaFlag,
    },
    cloud1: {
        marginTop: '-30%',
        opacity: 1,
        zIndex: 10,
        // marginBottom: "10%",
    },
    cloud2: {
        marginTop: "-40%",
        marginLeft: "-50%",
        opacity: 0.7,
    },
    cloud3: {
        marginTop: "-50%",
        marginRight: '-50%',
        opacity: 0.4,
        marginBottom: "-10%"
    },
    gift1: {
        zIndex: 15,
        marginTop: "-20%",
        marginRight: "-50%",
    },
    gift2: {
        zIndex: 15,
        marginTop: "-35%",
        marginLeft: "-35%",
    },
    gift3: {
        zIndex: 20,
        marginTop: "-30%",
        marginRight: "-10%",
        marginBottom: "-30%",
    },
    cart: {
        zIndex: 10,
        marginTop: "-55%",
        marginBottom: "-25%",
        marginLeft: "-30%",
    },
});

export default Styles;