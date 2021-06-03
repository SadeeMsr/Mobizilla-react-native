import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mobileContainer}>
        <ImageBackground source={require('./assets/images/samsung.jpg')} style={styles.image}></ImageBackground>
        <View style={styles.titles}>
          <Text style={styles.title}>Vivo V17</Text>
          <Text style={styles.subTitle}>Buying Price $400</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mobileContainer: {
    width: "100%",
    height: "100%",
  },
  titles: {
    marginTop: "10%",
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subTitle: {
    fontWeight: 16,
    color: "#5c5e62"
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'content',
    position: 'absolute'
  }
});
