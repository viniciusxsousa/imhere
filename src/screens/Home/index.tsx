import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./styles"

export function Home() {
    function handllerAddParticipant() {
        console.log('Participante adicionado');
    }

    return(
      <View style={styles.container}>
        <Text style={styles.eventName}>Nome do Evento</Text>
        <Text style={styles.eventDate}>Sexta, 27 de setembro de 2024</Text>


        <View style={styles.form}>
            <TextInput 
              placeholder="Digite o nome do participante"
              placeholderTextColor="#6b6b6b"
              style={styles.input}
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={handllerAddParticipant}
            >
                <Text style={styles.btnText} >+</Text>
            </TouchableOpacity>
        </View>

      </View>
    )
}