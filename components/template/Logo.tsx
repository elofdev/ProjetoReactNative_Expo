import { View, Text, StyleSheet } from "react-native";

export default function Logo(){
    return(
        <View>
            <Text style={styles.primario}>SPACE QUIZ</Text>
            <Text style={styles.secundario}>Perguntas de outro mundo!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    primario: {
        fontFamily: 'SOLARSPACEDEMO-Regular',
        fontSize: 35,
        color: 'white',
        textAlign: 'center',
    },
    secundario:{
        fontFamily: 'SPACEMISSION',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: 5,
    },

})