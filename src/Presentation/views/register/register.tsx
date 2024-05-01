import React from 'react'
import { StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid, TouchableOpacity } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import useViewModel from './viewModel'
import { CustomTextInput } from '../../components/CustomTextInput';
import styles from './styles'

export const RegisterScreen = () => {

    const { name, lastname, email, phone, password, confirmPassword, onChange ,register } = useViewModel();
    return (
        <View style={styles.container}>
            <Image
                source={require('../../../../assets/forraje.png')}
                style={styles.imageBackground}
            />

            <View style={styles.logoContainer}>
                <Image
                    source={require('../../../../assets/logo2.png')}
                    style={styles.logoImage}
                />
                <Text style={styles.logoText}>HydroHarmony IOT</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.formText}>REGISTRARSE</Text>

                <CustomTextInput
                    placeholder='Nombre(s)'
                    keyboardType='default'
                    image={require('../../../../assets/user.png')}
                    property='name'
                    onChangeText={onChange}
                    value={name}
                />

                <CustomTextInput
                    placeholder='Apellidos'
                    keyboardType='default'
                    image={require('../../../../assets/my_user.png')}
                    property='lastname'
                    onChangeText={onChange}
                    value={lastname}
                />

                <CustomTextInput
                    placeholder='Correo electronico'
                    keyboardType='email-address'
                    image={require('../../../../assets/email.png')}
                    property='email'
                    onChangeText={onChange}
                    value={email}
                />


                <CustomTextInput
                    placeholder='Telefono'
                    keyboardType='numeric'
                    image={require('../../../../assets/phone.png')}
                    property='phone'
                    onChangeText={onChange}
                    value={phone}
                />

                <CustomTextInput
                    placeholder='Contraseña'
                    keyboardType='default'
                    image={require('../../../../assets/password.png')}
                    property='password'
                    onChangeText={onChange}
                    value={password}
                    secureTextEntry={true}
                />

                <CustomTextInput
                    placeholder='Confirmar Contraseña'
                    keyboardType='default'
                    image={require('../../../../assets/confirm_password.png')}
                    property='confirmPassword'
                    onChangeText={onChange}
                    value={confirmPassword}
                    secureTextEntry={true}
                />


                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='CONFIRMAR' onPress={() => register()} />
                </View>


            </View>

        </View>
    );
}



