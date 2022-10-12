import { StyleSheet } from "react-native";
import Colors from "../../Constants/Colors";

const Styles = StyleSheet.create({
    landingPageHeader: {
        width: '100%',
        height: 'auto',
        paddingHorizontal: 15,
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.maroon
    },
    headerTextContainer: {
        // width: '60%',
        flex: 1,
    },
    headerText: {
        // flex: 0.6,
        height: 'auto',
        textAlign: 'center',
        fontSize: 24,
        color: Colors.white,
        fontWeight: '600',
        letterSpacing: 1,
        paddingLeft: 40,
    },
    skipBtnTouchable: {
        // width: '20%',
        // flex: 0.2,
        alignItems: 'flex-end',
    },
    skipBtnText: {
        fontSize: 16,
        color: Colors.waterMelon,
        textTransform: 'uppercase',
        fontWeight: '500',
        letterSpacing: 1,
    },
});

export default Styles;