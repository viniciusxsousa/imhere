import { View, Text, TouchableOpacity } from "react-native"

import { styles } from "./styles"

type Props = {
    name: string,
}

export function Participants({name}: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.name} >
                {name}
            </Text>
            <TouchableOpacity style={styles.button} >
                <Text style={styles.btnText} >-</Text>
            </TouchableOpacity>
        </View>
    )
}