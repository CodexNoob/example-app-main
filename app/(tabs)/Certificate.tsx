// File: app/(tabs)/Certificate.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import axios from 'axios'; // Commented out since there is no backend

const Certificate = () => {
  // State to hold student details
  const [firstName, setFirstName] = useState('John'); // Pre-filled data for testing
  const [lastName, setLastName] = useState('Doe'); // Pre-filled data for testing
  const [score, setScore] = useState(85); // Pre-filled data for testing
  const [preferredCourse, setPreferredCourse] = useState('Computer Science'); // Pre-filled data for testing
  const [loading, setLoading] = useState(false);
  const [hasPassed, setHasPassed] = useState(false);

  useEffect(() => {
    // Simulate fetching student data (you can replace this with real fetch logic later)
    const fetchStudentData = async () => {
      setLoading(true);
      try {
        // Uncomment and use this part when the backend is ready
        /*
        const response = await axios.get('https://your-api-url.com/api/studentData');
        const studentData = response.data;

        setFirstName(studentData.firstName);
        setLastName(studentData.lastName);
        setScore(studentData.score);
        setPreferredCourse(studentData.preferredCourse);
        
        setHasPassed(studentData.score >= 50);
        */
        
        // Simulated logic (for testing without a backend)
        setHasPassed(score >= 50);
      } catch (error) {
        console.error('Error fetching student data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStudentData();
  }, []);

  const handleGeneratePDF = async () => {
    // Generate the HTML content for the PDF
    const html = `
      <h1 style="text-align: center;">Certificate of Passing</h1>
      <p>This is to certify that:</p>
      <p>First Name: ${firstName}</p>
      <p>Last Name: ${lastName}</p>
      <p>Score: ${score}</p>
      <p>Preferred Course: ${preferredCourse}</p>
    `;

    // Create the PDF
    const options = {
      html,
      fileName: 'Certificate',
      directory: 'Documents',
    };

    try {
      const file = await RNHTMLtoPDF.convert(options);
      console.log('PDF created at:', file.filePath);
      // Optionally, show a success message or use a file viewer to open the PDF
      alert('Certificate PDF generated successfully! You can find it in your documents.');
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Failed to generate PDF.');
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Certificate</Text>
      {hasPassed ? (
        <Button title="Download Certificate" onPress={handleGeneratePDF} />
      ) : (
        <Text style={styles.errorText}>You didn't take or pass the exams.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Certificate;
