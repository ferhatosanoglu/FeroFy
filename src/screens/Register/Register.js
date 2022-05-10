import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Button
} from 'react-native';
import { routes } from '../../constants/routes';
import ferofyLogo from '../../../assets/ferofyLogo.png';
import emailLogo from '../../assets/img/Vector.png'
import passwordLogo from '../../assets/img/password.png'
import userLogo from '../../assets/img/user.png'
import Input from '../../components/inputs/input';
import * as yup from 'yup';
import useForm from '../../hooks/useForm';
import * as Queries from '../../utils/queries';
import { useAtom } from 'jotai';
import { userAtom } from '../../utils/atoms';
const Register = ({ navigation }) => {
    const [user, setUser] = useAtom(userAtom);
    const onRegister = async () => {
        try {
            const person = await Queries.Register(values)
            if (person.data.id) {
                setUser(person.data);
                navigation.navigate(routes.Home)

            }
        } catch (err) {
            console.log(err)
        }
    }
    const onLogin = () => {
        navigation.navigate(routes.Login)
    }
    var validation = yup.object({
        Email: yup
            .string()
            .email('Geçersiz e-posta adresi.')
            .trim()
            .required('Lütfen e-posta adresinizi giriniz.'),
        Password: yup.string().required('Lütfen parolanızı giriniz.'),
        Name: yup.string().required('lutfen bosluklari doldurunuz')
    });
    var { values, setValues, isValid, errors, isSubmitted, onFormSubmit } =
        useForm({ Email: '', Password: '', Name: '' }, validation);

    return (
        <View style={styles.container}>
            <View>
                <Image
                    resizeMode='contain'
                    style={styles.ferofyLogo}
                    source={ferofyLogo} />
                <Text style={styles.Text}>FeroFy Music</Text>
                <View style={{ width: 300 }} >
                    <Input title="Isim Soyisim"
                        keyboardType="default"
                        placeholder={'Isminiz Soyisminiz'}
                        inputStyle={styles.Input} value={values.Name}
                        img={userLogo}
                        onChangeText={Name => setValues({ Name })} />
                    <Input title="E-Posta Adresi"
                        keyboardType="email-address"
                        placeholder={'Eposta Adresiniz'}
                        inputStyle={styles.Input} value={values.Email}
                        img={emailLogo}
                        onChangeText={Email => setValues({ Email })} />
                    <Input title="Sifre"
                        placeholder={'Sifreniz'}
                        secureTextEntry={true}
                        inputStyle={styles.Input} value={values.Password}
                        img={passwordLogo}
                        onChangeText={Password => setValues({ Password })} />
                </View>
                <TouchableOpacity style={styles.button} onPress={
                    onRegister
                }><Text style={{ fontSize: 20, color: '#fff' }}>Uye OL</Text></TouchableOpacity>
                <Button title='Zaten uye misin?' onPress={onLogin} />
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
export default Register;