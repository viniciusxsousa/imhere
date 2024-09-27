import { View, Text, TextInput } from "react-native"
import { styles } from "./styles"

export function Home() {
    return(
      <View style={styles.container}>
        <Text style={styles.eventName}>Nome do Evento</Text>
        <Text style={styles.eventDate}>Sexta, 27 de setembro de 2024</Text>

        <TextInput 
          placeholder="Digite o nome do participante"
          placeholderTextColor="#6b6b6b"
          style={styles.input}
        />
      </View>
    )
}