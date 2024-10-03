import { View, Text, TouchableOpacity } from "react-native"

import { styles } from "./styles"

type Props = {
    name: string,
    remove: () => void,
}

export function Participants({name, remove}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name} >
                {name}
            </Text>
            <TouchableOpacity 
                style={styles.button} 
                onPress={remove}
            >
                <Text style={styles.btnText} >-</Text>
            </TouchableOpacity>
        </View>
    )
}