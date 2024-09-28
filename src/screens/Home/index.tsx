import { View, Text, TextInput, TouchableOpacity, FlatList } from "react-native"

import { Participants } from "../../components/Participants";

import { styles } from "./styles"

export function Home() {
    const participants = ['Vinicius', 'Beatriz', 'Kiara', 'Maria', 'Giovanna', 'Cloves', 'Gustavo', 'João', 'Pablo', 'Erika']

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

        <FlatList
          data={[]}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Participants  name={item}/>
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyList}>Ainda não temos participantes na sua lista de presença.</Text>
          )}
        />

      </View>
    )
}