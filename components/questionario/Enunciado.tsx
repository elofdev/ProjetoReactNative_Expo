import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, StyleSheet } from 'react-native'

export interface EnunciadoProps {
    enunciado: string
}


export default function Enunciado(props: EnunciadoProps) {
    return (
        <View style={style.container}>
            <LinearGradient colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0.2)']} style={style.background}/>
            <Text style={style.texto}>{ props.enunciado }</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#852E9C',
        padding: 20,
        marginHorizontal: 20,
        borderRadius: 10,
    },
    texto: {
        textAlign: 'center',
        color:'#fff',
        fontSize: 23,
        fontWeight: 'bold',
        opacity: 0.8,
    },
    background: {
        position:'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    }
})