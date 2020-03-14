import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

const AlbumImage = () => {
    return (
        <View style = {styles.ImageBackground}>
            <Image
                style = {{width: 250,height: 250}} 
                source = {{uri: 'https://s3-reissue.s3-ap-northeast-1.amazonaws.com/rr/wp-content/uploads/btlg_jkt_boot.jpg'}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    ImageBackground: {
        backgroundColor: "#000",
        justifyContent: "center",
        height: 250,
        paddingLeft: 85,
        paddingRight: 85,
        paddingTop: 20,
        paddingBottom: 20
        
    }
});

export default AlbumImage;