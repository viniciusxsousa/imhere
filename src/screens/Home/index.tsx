import { useState } from "react";

import { View, Text, TextInput, TouchableOpacity, FlatList, Alert } from "react-native"

import { Participants } from "../../components/Participants";

import { styles } from "./styles"

export function Home() {
    const [participants, setParticipants] = useState<string[]>([]);
    const [newParticipants, setNewParticipants] = useState('');

    function handllerAddParticipant(name: string) {
        setParticipants(prevState => [...prevState, name])
        setNewParticipants('');
    }

    function handllerRemoveParticipant(name: string) {
      Alert.alert('Participante', `Você gostaria de remover o participante ${name}?`, [
        {
          text: 'Sim'
        },
        {
          text: 'Não'
        }
      ])
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
              onChangeText={setNewParticipants}
              value={newParticipants}
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={() => handllerAddParticipant(newParticipants)}
            >
                <Text style={styles.btnText} >+</Text>
            </TouchableOpacity>
        </View>

        <FlatList
          data={participants}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <Participants  
              name={item}
              remove={() => handllerRemoveParticipant(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Text style={styles.emptyList}>Ainda não temos participantes na sua lista de presença.</Text>
          )}
        />

      </View>
    )
}