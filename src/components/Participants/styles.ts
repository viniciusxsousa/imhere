import { Button, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1f1e25',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 18,
    },
    name: {
        color: '#fff',
        flex: 1,
        marginLeft: 16,
        fontSize: 16,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#e23c44',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff',
    }
})