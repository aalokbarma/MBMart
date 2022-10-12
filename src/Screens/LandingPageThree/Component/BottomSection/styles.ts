import { StyleSheet } from "react-native";
import Colors from "../../../../Constants/Colors";

const Styles = StyleSheet.create({
    bottomSheet: {
        width: '100%',
        backgroundColor: Colors.cream,
        paddingBottom: 75,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 'auto'
    },
    leftSection: {
        flex: 0.3,
    },
    backButtonTouchable: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    },
    backText: {
        fontSize: 20,
        fontWeight: '600',
        textTransform: 'uppercase',
        color: Colors.fireBrick,
        paddingLeft: 5,
    },
    nextText: {
        fontSize: 20,
        fontWeight: '600',
        textTransform: 'uppercase',
        color: Colors.fireBrick,
        paddingLeft: 5,
    },
    midSection: {
        flex: 0.4,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emptyView: {
        width: 30,
        height: 10,
        borderRadius: 50,
        // backgroundColor: Colors.maroon,
        borderWidth: 1,
        borderColor: Colors.maroon,
        margin: 5,
        marginTop: -100,
    },
    activeEmptyView: {

    },
    rightSection: {
        flex: 0.3,
    },
});

export default Styles;