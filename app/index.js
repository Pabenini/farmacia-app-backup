import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
      style={{
        borderColor: "green", 
        borderWidth: 2,
        borderRadius: 300,
        borderStyle: 'solid',
        width: 300,
        height: 300,
        marginBottom: 70,
      }} 
      source={require('../assets/images/Farmacia-logo.png')}
      />
      <Link href="/bla" style={styles.button} asChild>
        <TouchableOpacity>
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 20,
    backgroundColor: '#009900',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  buttonText: {
    fontSize: 20,
    color: '#F2F2F2',
    fontWeight: 'bold',
  },
});