import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome to Colegio de Montalbán</Text>
      
      <View style={styles.section}>
        <Image
          source={{ uri: 'https://lh3.googleusercontent.com/p/AF1QipORi3mgg4IGriCDXpyCimQ5LsixkmO3Se9Eo1V2=s680-w680-h510' }} // Replace with actual image URL or local asset
          style={styles.image}
        />
        <Text style={styles.description}>
          Colegio de Montalbán is a prestigious institution known for its commitment to academic excellence and character development.
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.subtitle}>Our Mission</Text>
        <Text style={styles.description}>
          To provide a holistic education that nurtures the intellectual, emotional, and social development of our students.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Academic Programs</Text>
        <Text style={styles.description}>
          We offer a wide range of programs including Science, Mathematics, Humanities, and Arts to cater to diverse student interests.
        </Text>
        <Image
          source={{ uri: 'https://lh3.googleusercontent.com/p/AF1QipOqFIAteHc30XT0MuclRyUMJuU7roryELnXXdFK=s680-w680-h510' }} // Replace with actual image URL or local asset
          style={styles.image}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Extracurricular Activities</Text>
        <Text style={styles.description}>
          Students can participate in various clubs and sports teams, fostering teamwork and leadership skills.
        </Text>
        <Image
          source={{ uri: 'https://example.com/extracurricular-image.jpg' }} // Replace with actual image URL or local asset
          style={styles.image}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.subtitle}>Contact Us</Text>
        <Text style={styles.description}>
          For more information, visit our website or contact our administration office.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    elevation: 2,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginTop: 10,
  },
});

export default Home;
