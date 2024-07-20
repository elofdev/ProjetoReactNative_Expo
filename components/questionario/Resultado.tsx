import { View, Text, StyleSheet, Pressable } from "react-native";

export interface ResultadoProps {
    pontuacao: number
    totalDePerguntas: number
    reiniciar: () => void
}


export default function Resultado(props: ResultadoProps) {

    const { pontuacao, totalDePerguntas, reiniciar} = props

return(
    <View style={style.container}>
        <Text style={style.texto}>Você acertou</Text>
        <Text style={style.destaque}>
            {Math.round((pontuacao / totalDePerguntas) * 100 )}%
        </Text>
        <Pressable style={style.botao} onPress={reiniciar}>
            <Text style={style.textoBotao}>
                ReIniciar
            </Text>
        </Pressable>
    </View>
)
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#000',
        padding: 15,
    },
    texto: {
        color: '#bbb',
        fontSize: 20,
    },
    destaque: {
        color: '#fff',
        fontSize: 60,
        fontWeight: '900',
    },
    botao: {
        marginTop: 20,
        backgroundColor: '#2E9D48',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    textoBotao: {
        color: '#fff',
    },
})