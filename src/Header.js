import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.artistTextStyle}>米津玄師　４thアルバム</Text>
            <Text style={styles.albumTextStyle}>BOOTLEG</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerStyle: {
        backgroundColor: "#FFFFFF",
        justifyContent: "center",
        alignItems: "center",
        // height: 90,
        paddingTop: 50,
        paddingBottom: 35,
        elevation: 2,
    },
    artistTextStyle: {
        fontSize: 15
    },
    albumTextStyle: {
        fontSize: 30
    },
});

export default Header;