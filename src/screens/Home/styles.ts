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
        marginTop: 15,
        height: 56,
        padding: 16,

        backgroundColor: '#1F1E25',
        color: '#fff',
        fontSize: 16,
        borderRadius: 5,
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
    }
  });