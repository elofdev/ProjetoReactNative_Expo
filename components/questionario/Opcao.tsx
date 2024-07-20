import { Pressable, StyleSheet, Text } from "react-native"

export interface OpcaoProps {
    indice: number
    texto: string
    onPress: () => void
}


export default function Opcao(props: OpcaoProps){
    return (
        <Pressable style={style.container} onPress={props.onPress}>
            <Text style={style.texto}>{props.texto}</Text>
        </Pressable>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#2E9D48',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 50,

    },
    texto: {
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold',
    }
})