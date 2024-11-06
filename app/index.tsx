import { Button, StyleSheet, Image } from "react-native";
import { useRouter, router } from "expo-router";

// // Make sure to update the path to your logo image
const logo = require("../assets/images/logo.png"); // Adjust the path according to your project structure

import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {

    const handleSkip = () => {
//     // Ensure that this matches the filename of RegistrationPage.tsx
    router.push("/RegistrationPage");
  };


  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.welcomeText}>Welcome to Our App!</Text>
      <Text style={styles.subText}>
        We’re excited to have you here. Let’s get started!
      </Text>

      <Button title="Skip" onPress={handleSkip} />
    </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 150, // Adjust width according to your logo size
    height: 150, // Adjust height according to your logo size
    marginBottom: 20, // Space between logo and welcome text
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subText: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    marginBottom: 30,
  },
});