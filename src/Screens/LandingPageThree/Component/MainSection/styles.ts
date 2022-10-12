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
        marginTop: '0%',
        opacity: 0.5,
        zIndex: 10,
        // marginBottom: '10%',
    },
    cloud2: {
        marginTop: "-50%",
        marginLeft: "-50%",
        opacity: 0.7,
    },
    cloud3: {
        marginTop: "-45%",
        marginRight: '-50%',
        opacity: 0.8,
    },
    gift1: {
        zIndex: 15,
        marginTop: "-0%",
        marginRight: "-50%",
    },
    gift2: {
        zIndex: 15,
        marginTop: "-38%",
        marginLeft: "-35%",
    },
    gift3: {
        zIndex: 20,
        marginTop: "-20%",
        marginRight: "-20%",
        marginBottom: "-20%",
    },
    cart: {
        zIndex: 10,
        marginTop: "-30%",
        marginBottom: "-25%",
        marginLeft: "-30%",
    },
});

export default Styles;