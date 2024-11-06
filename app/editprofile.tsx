// File: app/EditProfile.tsx

import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type ProfileData = {
  id: string; // Add the appropriate type for id
  fullName: string;
  age: number; // Adjust this type if needed
  preferredCourse: string;
  phoneNumber: string;
  previousSchool: string;
  strand: string;
  email: string;
};

type EditProfileProps = {
  route: RouteProp<{ params: { profileData: ProfileData } }, 'params'>;
  navigation: StackNavigationProp<any>; // Replace 'any' with the specific type if you have defined your stack
};

const EditProfile: React.FC<EditProfileProps> = ({ route, navigation }) => {
  const { profileData } = route.params; // Get profile data passed from Profile component

  const [fullName, setFullName] = useState(profileData.fullName);
  const [age, setAge] = useState(profileData.age.toString()); // Convert age to string for TextInput
  const [preferredCourse, setPreferredCourse] = useState(profileData.preferredCourse);
  const [phoneNumber, setPhoneNumber] = useState(profileData.phoneNumber);
  const [previousSchool, setPreviousSchool] = useState(profileData.previousSchool);
  const [strand, setStrand] = useState(profileData.strand);
  const [email, setEmail] = useState(profileData.email);
  // Password is usually not edited for security reasons
  const [password, setPassword] = useState('');

  const handleSave = async () => {
    const updatedProfile = {
      fullName,
      age,
      preferredCourse,
      phoneNumber,
      previousSchool,
      strand,
      email,
      // password, // Uncomment this if you want to allow password changes
    };

    try {
      // Uncomment this part when you want to connect to the backend
      /*
      await fetch(`http://your-api-url/api/profile/${profileData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProfile),
      });
      navigation.goBack(); // Navigate back to the Profile page after saving
      */
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <TextInput placeholder="Full Name" value={fullName} onChangeText={setFullName} style={styles.input} />
      <TextInput placeholder="Age" value={age} onChangeText={setAge} keyboardType="numeric" style={styles.input} />
      <TextInput placeholder="Preferred Course" value={preferredCourse} onChangeText={setPreferredCourse} style={styles.input} />
      <TextInput placeholder="Phone Number" value={phoneNumber} onChangeText={setPhoneNumber} style={styles.input} />
      <TextInput placeholder="Previous School" value={previousSchool} onChangeText={setPreviousSchool} style={styles.input} />
      <TextInput placeholder="Strand" value={strand} onChangeText={setStrand} style={styles.input} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input} />
      {/* Uncomment below if password editing is required */}
      {/* <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={styles.input} /> */}
      <Button title="Save Changes" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: '100%',
  },
});

export default EditProfile;
