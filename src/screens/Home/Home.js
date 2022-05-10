import React from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    ImageBackground,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';
import { userAtom } from '../../utils/atoms';
import { useAtom } from 'jotai';
import bannerintro from '../../assets/img/music.png';
import person from '../../assets/img/person.png';
import { routes } from '../../constants/routes';
import userLogo from '../../assets/img/user.png'
import exitLogo from '../../assets/img/exit.png'


const data = [
    {
        id: '1',
        url: 'https://www.chosic.com/wp-content/uploads/2021/07/The-Epic-Hero-Epic-Cinematic-Keys-of-Moon-Music.mp3',
        title: 'Keys of moon',
        artist: 'The Epic Hero',
        artwork: 'https://static.daktilo.com/sites/415/uploads/2021/02/03/2-geyik.jpg',
        album: '',
        duration: 149,
    },
    {
        id: '2',
        url: 'https://www.chosic.com/wp-content/uploads/2021/07/Raindrops-on-window-sill.mp3',
        title: 'Raindrops on window sill',
        artist: '',
        artwork: 'https://i.pinimg.com/474x/4b/43/56/4b43566f88acd9a8a689f3c9f0bc8e70.jpg',
        album: 'Chosic',
        duration: 119,
    },
    {
        id: '3',
        url: 'https://www.chosic.com/wp-content/uploads/2021/07/purrple-cat-equinox.mp3',
        title: 'Equinox',
        artist: 'Purple Cat',
        artwork: 'https://www.camhotel.com.tr/wp-content/uploads/2018/07/cam-hotel-doga-manzaralari-kaz-daglari-1.jpg',
        album: '',
        duration: 140,
    },
    {
        id: '4',
        url: 'https://www.chosic.com/wp-content/uploads/2021/04/And-So-It-Begins-Inspired-By-Crush-Sometimes.mp3',
        title: 'And So It Begins',
        artist: '',
        artwork: 'https://icdn.ensonhaber.com/resimler/galeri/1_5019.jpg',
        album: 'Artificial Music',
        duration: 208,
    },
    {
        id: '5',
        url: 'https://www.chosic.com/wp-content/uploads/2021/05/inossi-got-you.mp3',
        title: 'Got You',
        artist: '',
        artwork: 'https://www.dogadernegi.org/wp-content/uploads/2021/06/dsc00266-1280x570.jpg',
        album: 'INOSSI',
        duration: 178,
    },
    {
        id: '6',
        url: 'https://www.chosic.com/wp-content/uploads/2021/04/kvgarlic__largestreamoverloginforestmarch.mp3',
        title: 'Peaceful water stream',
        artist: '',
        artwork: 'https://i.picsum.photos/id/1038/200/300.jpg?hmac=YkU1czWdP8PVibbjnh2YFlQZVnacHSntbpt41mgiXGU',
        album: 'Chosic',
        duration: 66,
    },
];
const Home = ({ navigation }) => {
    const onSong = (Song) => {
        navigation.navigate(routes.Song, Song)
    }
    const exit = () => {
        navigation.navigate(routes.Login)
    }
    const editUser = () => {
        navigation.navigate(routes.User)
    }
    const [user, setUser] = useAtom(userAtom);
    return (

        <View style={styles.container}>
            <View style={{
                marginTop: 25, width: 375,
                flexDirection: 'row-reverse', flexWrap: "wrap", flex: 1
            }}>
                <TouchableOpacity onPress={exit}><Image style={{ width: 30, height: 30, marginTop: 10 }} source={exitLogo} /></TouchableOpacity>
                <TouchableOpacity onPress={editUser}><Image style={{ width: 50, height: 50 }} source={userLogo} /></TouchableOpacity>
            </View>
            <ImageBackground style={styles.banner} source={bannerintro}>
                <View style={{ alignItems: 'center' }}>
                    <Image styles={styles.personPhoto} source={person} />
                    <Text style={{ fontSize: 20 }}>Merhaba</Text>
                    <Text style={{ fontSize: 20 }}>{user.Name}</Text>
                </View>

            </ImageBackground>
            <ScrollView>
                {
                    data.map((item) => {
                        return (<TouchableOpacity style={styles.music} onPress={() => {
                            navigation.navigate(routes.Song, item)
                        }}>
                            <View style={styles.music.group}>
                                <Image style={{ width: 50, height: 50 }} source={{ uri: item.artwork }} />
                                <View style={{ marginLeft: 10 }}>
                                    <Text>{item.title}</Text>
                                    <Text>{item.artist}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>)
                    })}
            </ScrollView>

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
        width: 50,
        height: 50,
        left: 285,
        top: 174,
    },
    banner: {
        marginTop: 5,
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

export default Home; 