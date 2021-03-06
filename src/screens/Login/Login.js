import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    Img,
    StyleSheet,
    Button,
    TouchableOpacity
} from 'react-native';
import * as Queries from '../../utils/queries';
import { routes } from '../../constants/routes';
import useForm from '../../hooks/useForm';
import ferofyLogo from '../../../assets/ferofyLogo.png';
import emailLogo from '../../assets/img/Vector.png'
import passwordLogo from '../../assets/img/password.png'
import Input from '../../components/inputs/input';
import * as yup from 'yup';
import { useAtom } from 'jotai';
import { userAtom } from '../../utils/atoms';




const Login = ({ navigation }) => {
    var validation = yup.object({
        Email: yup
            .string()
            .email('Geçersiz e-posta adresi.')
            .trim()
            .required('Lütfen e-posta adresinizi giriniz.'),
        Password: yup.string().trim().required('Lütfen parolanızı giriniz.'),
    });
    var { values, setValues, isValid, errors, isSubmitted, onFormSubmit } =
        useForm({ Email: '', Password: '' }, validation);
    const [user, setUser] = useAtom(userAtom);
    const onLogin = async () => {
        try {
            const person = await Queries.Login(values)
            if (person.data[0].id) {
                setUser(person.data[0]);
                navigation.navigate(routes.Home)

            }
        } catch (err) {
            console.log(err)
        }

        console.log(user.data)
    }
    const onRegister = () => {
        navigation.navigate(routes.Register)
    }
    return (
        <View style={styles.container}>
            <View>
                <Image
                    resizeMode='contain'
                    style={styles.ferofyLogo}
                    source={ferofyLogo} />
                <Text style={styles.Text}>Welcome to FeroFy Music</Text>
                <View style={{ width: 300 }} >
                    <Input title="E-Posta Adresi"
                        keyboardType="email-address"
                        placeholder={'Eposta Adresiniz'}
                        keyboardType="email-address"
                        inputStyle={styles.Input}
                        value={values.Email}
                        img={emailLogo}
                        onChangeText={Email => setValues({ Email })} />
                    <Input title="sifre"
                        keyboardType="default"
                        img={passwordLogo}
                        placeholder={'Sifreniz'}
                        inputStyle={styles.Input}
                        value={values.Password}
                        secureTextEntry={true}
                        onChangeText={Password => setValues({ Password })} />
                </View>
                <TouchableOpacity style={styles.button} onPress={
                    onLogin
                }><Text style={{ fontSize: 20, color: '#fff' }}>Giris Yap</Text></TouchableOpacity>
                <Button title='Üye ol' onPress={onRegister} />
            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E4F0FA'
    },
    ferofyLogo: {
        left: -50,
        top: -50,
        width: 200,
        height: 200,
    },
    Text: {
        width: 200,
        left: 0,
        top: -50,
        height: 63,
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 30,
        lineHeight: 31,
        textTransform: 'capitalize',
        color: '#6D81A1'
    },
    Input: {
        width: 500,
        height: 2,
    },
    button: {
        width: 335,
        height: 56,
        borderRadius: 30,
        backgroundColor: '#D58A85',
        alignItems: 'center',
        justifyContent: 'center',
    }
})
export default Login;