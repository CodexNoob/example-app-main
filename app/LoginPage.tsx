import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigation = useNavigation();

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleLogin = () => {
    console.log(formData);
    // Uncomment and implement your login logic here
    /*
    const response = await fetch('http://your-api-url/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const data = await response.json();
    // Handle the response from your backend (e.g., save token, navigate)
    */
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSkip = () => {
    navigation.navigate("(tabs)");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.logoContainer}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>

      <Text style={styles.title}>Login Page</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={formData.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={formData.password}
        onChangeText={(text) => handleInputChange('password', text)}
      />

      {/* Custom Black Button */}
      <TouchableOpacity style={styles.registerButton} onPress={handleLogin}>
        <Text style={styles.registerButtonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.skip}>
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logoContainer: {
    position: 'relative',
    alignItems: 'center',
    marginBottom: 15,
    width: '100%',
    top: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  backButton: {
    position: 'absolute',
    left: 0,
    padding: -5,
    zIndex: 1,
    top: -5,
  },
  backButtonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  registerButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  registerButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  skipButton: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  skipButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  skip: {
    paddingTop: 10,
  },
});
