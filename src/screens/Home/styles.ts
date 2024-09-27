import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    eventName: {
      color: '#fdfcfe',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate: {
      color: '#6b6b6b',
      fontSize: 16,
    }, 
    input: {
        height: 56,
        padding: 16,
        flex: 1,

        backgroundColor: '#1F1E25',
        color: '#fff',
        fontSize: 16,
        borderRadius: 5,
        marginRight: 16,
    }, 
    button: {
        height: 56,
        width: 56,
        backgroundColor: "#31CF67",
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontSize: 24,
        color: '#fff',
    },
    form: {
        flexDirection: 'row',

        marginTop: 24,
        marginBottom: 46,
    }
  });