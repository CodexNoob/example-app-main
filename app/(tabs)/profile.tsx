import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

const Profile = ({ studentId }) => {
  const [profileData, setProfileData] = useState({
    fullName: '',
    age: '',
    preferredCourse: '',
    phoneNumber: '',
    previousSchool: '',
    strand: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        // Fetching profile data from the backend
        // const response = await fetch(`http://your-api-url/api/profile/${studentId}`);
        // const data = await response.json();
        // setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [studentId]);

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveChanges = () => {
    // Here you would typically send the updated profile data to your backend
    // For now, we will just toggle off editing mode
    setIsEditing(false);
    // Example of how you could send the data
    // await fetch(`http://your-api-url/api/profile/${studentId}`, {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(profileData),
    // });
  };

  // Function to render profile data
  const renderProfileData = () => (
    <View>
      <Text style={styles.title}>Profile</Text>
      {isEditing ? (
        <>
          <TextInput
            placeholder="Full Name"
            value={profileData.fullName}
            onChangeText={(text) => setProfileData({ ...profileData, fullName: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Age"
            value={profileData.age.toString()}
            onChangeText={(text) => setProfileData({ ...profileData, age: text })}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            placeholder="Preferred Course"
            value={profileData.preferredCourse}
            onChangeText={(text) => setProfileData({ ...profileData, preferredCourse: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Phone Number"
            value={profileData.phoneNumber}
            onChangeText={(text) => setProfileData({ ...profileData, phoneNumber: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Previous School"
            value={profileData.previousSchool}
            onChangeText={(text) => setProfileData({ ...profileData, previousSchool: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Strand"
            value={profileData.strand}
            onChangeText={(text) => setProfileData({ ...profileData, strand: text })}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            value={profileData.email}
            onChangeText={(text) => setProfileData({ ...profileData, email: text })}
            style={styles.input}
          />
          {/* Password is usually not editable for security reasons */}
        </>
      ) : (
        <>
          <Text>Full Name: {profileData.fullName}</Text>
          <Text>Age: {profileData.age}</Text>
          <Text>Preferred Course: {profileData.preferredCourse}</Text>
          <Text>Phone Number: {profileData.phoneNumber}</Text>
          <Text>Previous School: {profileData.previousSchool}</Text>
          <Text>Strand: {profileData.strand}</Text>
          <Text>Email: {profileData.email}</Text>
          {/* Password is usually not displayed for security reasons */}
        </>
      )}
    </View>
  );

  // Render the loading state
  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      {renderProfileData()}
      <Button title={isEditing ? "Save Changes" : "Edit Profile"} onPress={isEditing ? handleSaveChanges : handleEditProfile} />
      {isEditing && (
        <Text>Edit mode is active. Modify your details above.</Text>
      )}
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
    textAlign: 'center',
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

export default Profile;
