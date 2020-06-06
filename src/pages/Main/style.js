import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#428DFC',
        borderRadius: 7
    },
    scroll: {
        top: 34,
    },
    title: {
        fontFamily: 'Poppins-Bold',
        fontSize: 18,
        marginLeft: 20,
        marginTop: 25
    },
    titleSec: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 18,
        marginBottom: 10,
        alignSelf: 'flex-start'
    },
    secondaryTitle: {
        fontFamily: 'Poppins-Bold',
        fontSize: 24,
        color: '#999999',
        marginTop: 80,
        marginLeft: 20
    },
    description: {
        fontFamily: 'Poppins-Medium',
        fontSize: 12,
        top: -5,
        marginBottom: 30,
        marginLeft: 20,
        color: "#BEBDBD",
    },
    floating: {
        width: 60,
        height: 60,
        borderRadius: 40,
        bottom: 50,
        right: 40,
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: 'red'
    },
    btnCreate: {
        elevation: 5,
        alignSelf: 'flex-end',
        borderRadius: 10,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 30,
        right: 20,
        backgroundColor: '#6F30BF'
    },
    btnText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 16,
        color: '#fff'
    },
    imagePerfilContainer: {
        height: 70,
        width: 70,
        borderRadius: 40,
        backgroundColor: '#000',
        alignSelf: 'flex-end',
        right: 40,
        top: 70,
        overflow: 'hidden',
        position: 'absolute'
    },
    imagePerfil: {
        flex: 1,
        resizeMode: 'contain',
        width: undefined,
        height: undefined
    }
})

export default styles 