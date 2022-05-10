import React, { useState, Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Button
} from 'react-native';
import Video from 'react-native-video';



const Song = ({ navigation, route }) => {
    const goBack = () => {
        navigation.goBack();
    }
    const item = route.params;
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isMuted, setIsMuted] = React.useState(false);

    return (
        <View style={styles.container}>
            <Button title='Geri' onPress={goBack} />
            <Image style={styles.personPhoto} source={{ uri: item.artwork }} />
            <Text>{item.title}</Text>
            <Video source={{ uri: item.url }}
                ref={(ref) => {
                    this.player = ref
                }}
                paused={!isPlaying}
                onBuffer={this.onBuffer}
                muted={isMuted}
                onError={this.videoError}
            />
            <Button
                onPress={() => setIsPlaying(p => !p)}
                title={isPlaying ? 'Stop' : 'Play'}
            />
            <Button
                onPress={() => setIsMuted(m => !m)}
                title={isMuted ? 'Unmute' : 'Mute'}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E4F0FA'
    },
    personPhoto: {
        width: 250,
        height: 250,
    },
    backgroundVideo: {
        width: 400,
        height: 400
    },
    banner: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 40,
        paddingTop: 30,
        width: 375,
        height: 200,
    },
    music: {
        width: 375,
        height: 70,
        group: {
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: 'center',
            paddingLeft: 20
        }
    }
})

export default Song; 