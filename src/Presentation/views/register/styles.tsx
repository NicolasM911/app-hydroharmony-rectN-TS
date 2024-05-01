import { StyleSheet } from "react-native";

const RegisterStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.7,
        bottom: '20%'
    },
    form: {
        width: '100%',
        height: '70%',
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 30,
    },
    formText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    },
    formIcon: {
        width: 25,
        height: 25,
        marginTop: 5,
    },
    formInput: {
        flexDirection: 'row',
        marginTop: 30,
    },
    formTextInput: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#AAAAAA',
        marginLeft: 15,
        fontSize: 18, // tamaño letra input
        color: 'black',
    },
    formRegister: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    formRegisterText0: {
        color: 'black',
    },
    formRegisterText: {
        fontStyle: 'italic',
        color: '#0ed145',
        borderBottomWidth: 1,
        borderBottomColor: '#0ed145',
        fontWeight: 'bold',
        marginLeft: 10,
        width: 150, // Ajusta el ancho según sea necesario
        textAlign: 'center', // Para centrar el texto horizontalmente
    },
    logoContainer: {
        position: 'absolute',
        alignSelf: 'center',
        top: '5%',
        alignItems: 'center'
    },
    logoImage: {
        width: 100,
        height: 100,
        //alignSelf: 'center',
    },
    logoText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 10,
        fontWeight: 'bold',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo semi-transparente
        padding: 10, // Añadir espacio entre el texto y el fondo
        borderRadius: 20,
    },

});

export default RegisterStyles;