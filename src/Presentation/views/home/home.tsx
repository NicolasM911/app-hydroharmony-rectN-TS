import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, ToastAndroid, TouchableOpacity, KeyboardType, Alert } from 'react-native';
import { RoundedButton } from '../../components/RoundedButton';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../../App';
import useViewModel from './viewModel';
import styles from './styles';
import { CustomTextInput } from '../../components/CustomTextInput';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeAuth, getAuth, getReactNativePersistence} from 'firebase/auth';
import appFirebase from '../../../../firebaseCrendenciales';
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword } from 'firebase/auth';


const auth = initializeAuth(appFirebase, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});



export const HomeScreen = () => {

    const { email, password, onChange } = useViewModel();

    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();


    const handleSignIn = async () => {
        try {
            if (!email || !password) { // Verifica si algún campo está vacío
                Alert.alert('Error', 'Por favor, completa todos los campos.');
                return; // Detiene la ejecución si algún campo está vacío
            }
            
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            Alert.alert('Iniciando Sesion', 'Accediendo...');
            navigation.navigate('RegisterScreen');
            console.log('sing in!!');
            const user = userCredential.user
            //console.log('Usuario autenticado:', user);
        } catch (error) {
            console.log(error);
            Alert.alert('Error', 'No se pudo iniciar sesión. Verifica tu contraseña.');
        }
    };

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
                <Text style={styles.formText}>INGRESAR</Text>

                <CustomTextInput
                    image={require('../../../../assets/email.png')}
                    placeholder='Correo Electronico'
                    keyboardType='email-address'
                    property='email'
                    onChangeText={onChange}
                    value={email}
                />

                <CustomTextInput
                    image={require('../../../../assets/password.png')}
                    placeholder='Contraseña'
                    keyboardType='default'
                    property='password'
                    onChangeText={onChange}
                    value={password}
                    secureTextEntry={true}
                />

                <View style={{ marginTop: 30 }}>
                    <RoundedButton text='INGRESAR' onPress={handleSignIn}/>
                </View>

                <View style={styles.formRegister}>
                    <Text style={styles.formRegisterText0}>No tienes cuenta?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                        <Text style={styles.formRegisterText}>Contacta al Administadror</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

