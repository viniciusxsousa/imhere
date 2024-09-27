import { View, Text } from "react-native"
import { styles } from "./styles"

export function Home() {
    return(
      <View style={styles.container}>
        <Text style={styles.eventName}>Nome do Evento</Text>
        <Text style={styles.eventDate}>Sexta, 27 de setembro de 2024</Text>
      </View>
    )
}