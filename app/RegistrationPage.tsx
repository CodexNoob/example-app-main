import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function RegistrationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    age: '',
    preferredCourse: '',
    phoneNumber: '',
    previousSchool: '',
    strand: '',
    email: '',
    password: '',
    confirmpassword: '',
  });

  const navigation = useNavigation();

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleRegister = () => {
    console.log(formData);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSkip = () => {
    navigation.navigate("LoginPage");
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
      
      <Text style={styles.title}>Registration Page</Text>

      <TextInput
        style={styles.input}
        placeholder="Lastname, Firstname Middlename"
        value={formData.fullName}
        onChangeText={(text) => handleInputChange('fullName', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={formData.age}
        onChangeText={(text) => handleInputChange('age', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={formData.phoneNumber}
        onChangeText={(text) => handleInputChange('phoneNumber', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Previous School"
        value={formData.previousSchool}
        onChangeText={(text) => handleInputChange('previousSchool', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Strand"
        value={formData.strand}
        onChangeText={(text) => handleInputChange('strand', text)}
      />

       <TextInput
        style={styles.input}
        placeholder="Preferred Course"
        value={formData.preferredCourse}
        onChangeText={(text) => handleInputChange('preferredCourse', text)}
      />

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

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry={true}
        value={formData.confirmpassword}
        onChangeText={(text) => handleInputChange('confirmpassword', text)}
      />

      {/* Custom Black Button */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Register</Text>
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
